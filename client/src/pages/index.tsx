import React from "react";
import Head from "next/head";
// Components
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <Navbar />
      </>
    </>
  );
};

export default index;
