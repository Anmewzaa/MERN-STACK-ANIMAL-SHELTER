import { useEffect, useState } from "react";
// React router dom
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import Navbar from "../components/Navbar";

const Adoptinfo = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  const fetchAPI = async () => {
    if (id) {
      await axios
        .get(`${API_URL}/get/${id}/`)
        .then((response) => {
          setPost(response.data.response);
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
  }, []);

  return (
    <>
      <>
        <Navbar />
        <div className="mx-auto max-w-[960px]">
          <div className="my-4">
            <img
              src={`${IMAGE_URL}/${post?.postImage}`}
              className="max-h-[500px]"
            />
            <h2>{post.postTitle}</h2>
            <p>{post.postDesciption}</p>
          </div>
        </div>
      </>
    </>
  );
};

export default Adoptinfo;
