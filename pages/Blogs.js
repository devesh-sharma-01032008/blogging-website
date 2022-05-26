import Head from "next/head";
import React, { useState, useEffect } from "react";
import Blog from "./../public/reusable_components/Blog";

export default function PopularBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/GetBlogs");
    const data = await response.json();
    console.log(data.data)
    setBlogs(data.data);
    console.log(blogs);
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <title>IBlog: Popular Blogs</title>
      </Head>
      <section className="container">
        <h1 className="first-heading">Blogs</h1>
        {blogs.map((element) => {
          return (
            <Blog
              key={element._id}
              title={element.title}
              description={element.description}
              url={element.url}
              imageUrl={element.imageUrl}
            />
          );
        })}
      </section>
    </>
  );
}
