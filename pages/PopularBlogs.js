import Head from "next/head";
import React, { useState, useEffect } from "react";
import PopularBlog from "./reusable_components/PopularBlog";

export default function PopularBlogs() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/GetPopularBlogs");
    const data = await response.json();
    setPopularBlogs(data.data);
    console.log(popularBlogs);
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <title>IBlog: Popular Blogs</title>
      </Head>
      <section>
        {popularBlogs.map((element) => {
          return (
            <PopularBlog
              key={element.id}
              title={element.Title}
              description={element.Description}
              url={element.Url}
            />
          );
        })}
      </section>
    </>
  );
}
