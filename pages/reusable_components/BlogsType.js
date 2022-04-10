import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogsType(props) {
  return (
      <section className="blog-type">
        <div className="container">
          <div className="img-container">
            <Image
              src={props.imageSrc}
              width={100}
              height={100}
              fill="responsive"
              className="blog-type-image"
              alt={props.imageSrc}
            />
          </div>
          <div className="blog-type-description">
            <h1 className="blog-type-title">{props.blogTypeTitle}</h1>
            <p className="blog-type-para">{props.blogTypeDesc}</p></div>
        </div>
        <div className="btn-container-horizontal">
          <Link href={"/"}>
            <a className="btn">
              View Content
            </a>
          </Link>
          <Link href={props.blogUrl}>
            <a className="btn">
              Visit Blogs
            </a>
          </Link>
        </div>
      </section>
  );
}
