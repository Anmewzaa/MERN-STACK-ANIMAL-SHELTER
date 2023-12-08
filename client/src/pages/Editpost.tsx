import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
// Component
import Navbar from "../components/Navbar";
// React quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Swal
import Swal from "sweetalert2";

const Editpost = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [habit, setHabit] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) return navigate("/");
  }, []);
  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const { id } = useParams();
  const fetchAPI = () => {
    axios
      .get(`${API_URL}/get/${id}`)
      .then((response) => {
        setName(response.data.response.animalName);
        setSpecies(response.data.response.animalSpecies);
        setHabit(response.data.response.animalHabit);
        setDescription(response.data.response.animalDesciption);
        setImage(response.data.response.animalImage);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const updatePost = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`${API_URL}/update/${id}`, {
            animalName: name,
            animalSpecies: species,
            animalHabit: habit,
            animalDesciption: description,
          })
          .then(() => {
            Swal.fire({
              title: "Update post success!",
              text: "อัพเดทโพสต์สำเร็จ",
              icon: "success",
            }).then(() => {
              window.location.replace("/adopt");
            });
          });
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1200px]">
        <div className="xl:mx-0 mx-4">
          <div className="flex justify-center">
            <img
              src={`${IMAGE_URL}/${image}`}
              alt=""
              className="max-h-[500px] rounded-md mb-6"
            />
          </div>
          <h1 className="mb-4 text-3xl font-semibold ">Update Post</h1>
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                onChange={(e) => {
                  setSpecies(e.target.value);
                }}
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
          <div className="mb-8">
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
          <button className="btn btn-neutral w-full mb-8" onClick={updatePost}>
            Update Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Editpost;
