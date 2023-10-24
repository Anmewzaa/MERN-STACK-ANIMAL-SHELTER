import React from "react";

import Head from "next/head";
import Login from "@/components/Login";

const index = () => {
  return (
    <>
      <Head>
        <title>Animal Shelter - Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Login />
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
        </div>
      </div>
    </>
  );
};

export default index;