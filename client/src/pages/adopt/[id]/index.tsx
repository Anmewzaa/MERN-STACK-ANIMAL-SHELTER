/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Navbar from "@/components/Navbar";

const page = () => {
  const [post, setPost] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const fetchAPI = async () => {
    if (id) {
      await axios
        .get(`${API_URL}/getone/${id}/`)
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
      <Head>
        <title>Animal Shelter - Adopt</title>
      </Head>
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

export default page;
