import Head from "next/head";
import React, { useState, useEffect } from "react";
import BlogsType from "../reusable_components/BlogsType";
export default function MainBody() {
  const [blogTypes, setBlogTypes] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/GetBlogTypes");
    const data = await response.json();
    setBlogTypes(data.data);
  }, []);
  return (
    <>
      <Head>
        <title>iBlog: The Heaven For Bloggers</title>
        <meta
          name="description"
          content="This is a blogging website where you can find various blogs related to  computer science or programming. This website is made by Devesh."
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="blogs, programming, computer science, devesh, devesh sharma, iblog, blogging, c, python"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <section className="popular-blogs">
          <div className="container">
            <h1 className="first-heading">Popular Blogs Categories</h1>
          </div>
          <div className="container blogs-type-container" id="blogs-type">
            {blogTypes.map((element) => {
              return (
                <BlogsType
                  key={element.sno}
                  imageSrc={element.imagesrc}
                  blogTypeTitle={element.title}
                  blogTypeDesc={element.description}
                  blogUrl={element.url}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
