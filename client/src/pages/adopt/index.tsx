/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { postType } from "@/types/globalType";
// Components
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const index = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [search, setSearch] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
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
      <Head>
        <title>Animal Shelter - Adopt</title>
      </Head>
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

export default index;
