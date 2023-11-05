import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import axios from "axios";
// React quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Components
import Navbar from "../components/Navbar";

const AddPostPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) return navigate("/");
  }, []);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onImageChange = (e) => {
    setImages(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("postTitle", title);
    form.append("postDesciption", description);
    form.append("postImage", images);
    form.append("authorUid", auth.currentUser?.uid);
    form.append("authorName", auth.currentUser?.displayName);
    form.append("authorEmail", auth.currentUser?.email);
    form.append("authorProfile", auth.currentUser?.photoURL);

    axios
      .post(`${API_URL}/create`, form)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[960px]">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {JSON.stringify(images)}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              className="block my-2 file-input file-input-bordered w-full max-w-xs"
              onChange={onImageChange}
              required
            />
          </div>
          <div className="mb-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                className="input input-bordered w-full max-w-xs"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              className="my-2"
            />
          </div>
          <button className="btn btn-neutral" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostPage;
