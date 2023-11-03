import React, { useEffect, useState } from "react";
import axios from "axios";
// Type
import { postType } from "../types/globalType";
// Components
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const AdoptPage = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [search, setSearch] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchAPI = async () => {
    await axios
      .get(`${API_URL}/get`)
      .then((response) => {
        setPosts(response.data.response);
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
      post.postTitle.toLowerCase().includes(search.toLowerCase()) ||
      post.authorName.toLowerCase().includes(search.toLowerCase()) ||
      post.authorEmail.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <>
        <Navbar />
        <div className="mx-auto max-w-[960px]">
          <input
            type="text"
            placeholder="Search post"
            className="input input-bordered w-full my-4"
            value={search}
            onChange={handleSearch}
          />
          <div className="grid grid-cols-2 gap-8">
            {searchFilter.map((item) => (
              <div key={item?.postId}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default AdoptPage;
