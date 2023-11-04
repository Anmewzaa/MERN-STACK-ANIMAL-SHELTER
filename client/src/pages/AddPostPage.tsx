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
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) return navigate("/");
  }, []);
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImagesURLs(newImageUrls);
  }, [images]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(title && images.length > 0 && description))
      return alert("input required");
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[960px]">
        <form onSubmit={handleSubmit}>
          {imagesURLs.map((imagesrc) => (
            <img src={imagesrc} width={300} className="mb-4" />
          ))}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              className="block my-2 file-input file-input-bordered w-full max-w-xs"
              onChange={onImageChange}
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
