import React, { useEffect, useState } from "react";
import axios from "axios";
// Type
import { postType } from "../types/globalType";
// Components
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const AdoptPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<postType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchAPI = async () => {
    setLoading(true);
    await axios
      .get(`${API_URL}/get`)
      .then((response) => {
        setPosts(response.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };
  const searchFilter = posts.filter((post) => {
    if (search === "") {
      return post;
    }
    return (
      post.animalId.toLowerCase().includes(search.toLowerCase()) ||
      post.authorName.toLowerCase().includes(search.toLowerCase()) ||
      post.authorEmail.toLowerCase().includes(search.toLowerCase())
    );
  });

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
          <div className="mx-auto max-w-[1200px]">
            <div className="my-4 flex gap-2 mx-0">
              <input
                type="text"
                placeholder="Search post"
                className="input input-bordered w-full"
                value={search}
                onChange={handleSearch}
              />
              {auth.currentUser !== null && (
                <>
                  <button
                    className="btn btn-outline"
                    onClick={() => navigate("/addpost")}
                  >
                    Add New Post
                  </button>
                </>
              )}
            </div>
            {searchFilter.length === 0 ? (
              <>
                <div className="flex justify-center mt-8">Empty post...</div>
              </>
            ) : (
              <>
                <div className="grid mx-0 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4 ">
                  {searchFilter.map((item) => (
                    <div key={item?.postId}>
                      <Card {...item} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AdoptPage;
