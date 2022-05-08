import React from "react";
import Link from "next/link"
import Image from "next/image";
export default function Blog(props) {
  return (
    <div className="blog container">
      <div className="left-part">
        <div className='img-container'>
        <img className="blog-image" src={`/images/${props.imageUrl}`} width={100} height={100} />
        </div>
      </div>
      <div className="right-part">
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
            <a className="btn"><i className="fa-solid fa-circle-arrow-right icon-sm"></i></a>
          </Link>
          <Link href={"/"} >
            <a className="btn"><i className="fa-solid fa-user icon-sm"></i></a>
          </Link>
          <Link href={"/"} >
            <a className="btn"><i className="fa-solid fa-share icon-sm"></i></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
