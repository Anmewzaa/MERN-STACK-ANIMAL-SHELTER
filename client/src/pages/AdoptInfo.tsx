// React
import { useEffect, useState } from "react";
// React router dom
import { useParams, Link } from "react-router-dom";
// Axios
import axios from "axios";
// Components
import Navbar from "../components/Navbar";
import Comment from "../components/Comment";
import { postType } from "../types/globalType";
// Usecontext
import { useUserAuth } from "../contexts/UserAuthContext";
// Swal
import Swal from "sweetalert2";

const Adoptinfo = () => {
  const { user } = useUserAuth();
  const [post, setPost] = useState<postType>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const [comment, setComment] = useState("");

  const fetchAPI = async () => {
    if (id) {
      setLoading(true);
      await axios
        .get(`${API_URL}/get/${id}/`)
        .then((response) => {
          setPost(response.data.response);
          setComment(response.data.response.comment);
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
  const deletePost = () => {
    Swal.fire({
      title: "Do you want to delete this post?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_URL}/remove/${id}/`).then(() => {
          Swal.fire({
            title: "Delete post success!",
            text: "ลบโพสต์สำเร็จ",
            icon: "success",
          }).then(() => {
            window.location.replace("/adopt");
          });
        });
      }
    });
  };

  return (
    <div className="mb-8">
      <Navbar />
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto max-w-[1200px] shadow-md p-8 rounded-xl">
            <div className="my-4">
              <div className="flex justify-center items-center">
                <img
                  src={`${IMAGE_URL}/${post?.animalImage}`}
                  className="max-h-[500px] rounded-md mb-6"
                />
              </div>
              <h1 className="text-3xl font-semibold mb-4">
                {post?.animalName}{" "}
                <span className="text-sm font-normal">
                  ({post?.animalSpecies})
                </span>
              </h1>
              <h4 className="font-bold mb-2">Character :</h4>
              <h3 className="mb-2 text-[#58585B]">{post?.animalHabit}</h3>
              <h4 className="font-bold mb-2">About me :</h4>
              <div
                dangerouslySetInnerHTML={{ __html: post?.animalDesciption }}
                className="mb-2 text-[#58585B]"
              />
            </div>
            <div className="avatar">
              <h2 className="mr-2 font-bold">Author :</h2>
              <div className="w-6 rounded-full mr-2">
                <img src={post?.authorProfile} className="shadow-md" />
              </div>
              <p className="text-gray-800 mr-2">{post?.authorName}</p>
              <p className="text-gray-500">{`(${post?.authorEmail})`}</p>
            </div>
            <div className="bg-gray-50 rounded-md p-4 my-4">
              <div>
                <h2 className="font-bold text-xl mb-4">Comment</h2>
              </div>
              <Comment comment={comment} />
            </div>
            {user && (
              <>
                {user.uid === post?.authorUid && (
                  <>
                    <div className="flex justify-end">
                      <Link
                        className="btn btn-warning mr-2"
                        to={`/editpost/${id}`}
                      >
                        Edit post
                      </Link>
                      <button className="btn btn-error" onClick={deletePost}>
                        Delete post
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Adoptinfo;
