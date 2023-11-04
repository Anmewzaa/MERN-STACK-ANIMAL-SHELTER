import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";

import { auth } from "../firebase/firebase-config";

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

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[960px]">
        <input type="file" accept="image/*" onChange={onImageChange} />
        {imagesURLs.map((imagesrc) => (
          <img src={imagesrc} />
        ))}
      </div>
    </>
  );
};

export default AddPostPage;
