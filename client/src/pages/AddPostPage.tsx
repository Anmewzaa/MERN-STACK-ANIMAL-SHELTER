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
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [habit, setHabit] = useState("");
  const [description, setDescription] = useState("");
  const onImageChange = (e) => {
    setImages(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("animalName", name);
    form.append("animalSpecies", species);
    form.append("animalHabit", habit);
    form.append("animalDesciption", description);
    form.append("animalImage", images);
    form.append("authorUid", auth.currentUser?.uid);
    form.append("authorName", auth.currentUser?.displayName);
    form.append("authorEmail", auth.currentUser?.email);
    form.append("authorProfile", auth.currentUser?.photoURL);
    form.append("date", new Date());

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
          <h1 className="mb-4 text-3xl font-semibold">Add New Post</h1>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter animal name here"
                className="input input-bordered w-[screen-4]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Species</span>
            </label>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter animal species here"
                className="input input-bordered w-[screen-4]"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Habit</span>
            </label>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter animal habit here"
                className="input input-bordered w-[screen-4]"
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
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
          <div className="mb-8">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              className="block my-2 file-input file-input-bordered w-full"
              onChange={onImageChange}
              required
            />
          </div>
          <button className="btn btn-neutral w-full" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostPage;
