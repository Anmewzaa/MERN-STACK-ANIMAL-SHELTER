import { useEffect, useState } from "react";
// React router dom
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import Navbar from "../components/Navbar";
import Comment from "../components/Comment";
import { postType } from "../types/globalType";
import { useUserAuth } from "../contexts/UserAuthContext";

const Adoptinfo = () => {
  const { user } = useUserAuth();
  const [post, setPost] = useState<postType>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  const fetchAPI = async () => {
    if (id) {
      setLoading(true);
      await axios
        .get(`${API_URL}/get/${id}/`)
        .then((response) => {
          setPost(response.data.response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    return () => {
      fetchAPI();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deletePost = async () => {
    await axios
      .delete(`${API_URL}/remove/${id}/`)
      .then(() => window.location.replace("/adopt"));
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto max-w-[960px]">
            <div className="my-4">
              <div className="flex justify-center items-center">
                <img
                  src={`${IMAGE_URL}/${post?.postImage}`}
                  className="max-h-[500px] rounded-md mb-6"
                />
              </div>
              <h1 className="text-4xl font-semibold mb-4">{post?.postTitle}</h1>
              <div className="avatar mb-6">
                <div className="w-6 rounded-full mr-2">
                  <img src={post?.authorProfile} />
                </div>
                <p className="text-gray-500">{post?.authorName}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: post?.postDesciption }}
                className="mb-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md p-4 my-4">
              <Comment />
            </div>
            {user.uid === post?.authorUid && (
              <>
                <div className="flex justify-end my-4">
                  <button className="btn btn-warning mr-2">Edit post</button>
                  <button className="btn btn-error" onClick={deletePost}>
                    Delete post
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Adoptinfo;
