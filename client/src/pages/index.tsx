import React, { useEffect } from "react";
import Head from "next/head";
// Components
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>Animal Shelter</title>
      </Head>
      <>
        <Navbar />
      </>
    </>
  );
};

export default index;
