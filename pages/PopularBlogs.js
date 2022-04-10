import  Head  from "next/head";
import React from "react";
import PopularBlog from "./reusable_components/PopularBlog";

export default function PopularBlogs() {
  return (
    <><Head>
      <title>IBlog: Popular Blogs</title>
    </Head><section>
        <PopularBlog />
        <PopularBlog />
        <PopularBlog />
      </section></>
  );
}
