import React from "react";
import Link from "next/link"
export default function PopularBlog(props) {
  return (
    <div className="blog container">
      <div className="blog-title">
        <h2 className="second-heading">
          {props.title}
        </h2>
      </div>
      <div className="blog-desc">
        <p className="blog-paragraph">
          {props.description}
        </p>
      </div>
      <div className="btn-container-horizontal popular-blog-btn">
        <Link href={props.url} >
          <a className="btn">Read More</a>
        </Link>
        <Link href={"/"} >
          <a className="btn">View Author Detials</a>
        </Link>
        <Link href={"/"} >
          <a className="btn">Share</a>
        </Link>
      </div>
    </div>
  );
}
