import Head from "next/head";
import React, { useState, useEffect } from "react";
import PopularBlog from "./reusable_components/PopularBlog";

export default function PopularBlogs() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/GetPopularBlogs");
    const data = await response.json();
    console.log(data.data)
    setPopularBlogs(data.data);
    console.log(popularBlogs);
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <title>IBlog: Popular Blogs</title>
      </Head>
      <section className="container">
        <h1 className="first-heading">Popular Blogs</h1>
        {popularBlogs.map((element) => {
          return (
            <PopularBlog
              key={element._id}
              title={element.title}
              description={element.description}
              url={element.url}
            />
          );
        })}
      </section>
    </>
  );
}
