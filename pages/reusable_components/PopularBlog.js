import React from "react";
import Link from "next/link"
export default function PopularBlog() {
  return (
    <div className="blog container">
      <div className="blog-title">
        <h2 className="second-heading">
          What is Programming & Why do we need it?
        </h2>
      </div>
      <div className="blog-desc">
        <p className="blog-paragraph">
          <b>Programming</b> is a way of instructing a computer and
          communicating with it to use its high resources such as high
          calculation speed etc. In general, It is a way of communicating with
          computer to get our work done like we does with friends, parents, etc.
          But to give instruction to somebody and more precisely to the computer
          we need a interface such as english or hindi is interface to
          communicate with parents and friends. In the same way, we need some
          type of language or interface to communicate with computer and this is
          termed as <b>Programming Languages</b>.
        </p>
      </div>
      <div className="btn-container-horizontal popular-blog-btn">
        <Link href={"/"} >
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
