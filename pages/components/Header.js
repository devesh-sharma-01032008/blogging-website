import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <header>
      <h1 className="logo">
        i<span>Blog</span>
      </h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/PopularBlogs"}>
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href={"/ContactUs"}>
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link className="curved-button" href={"/SignUp"}>
              <a className="curved-button">Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href={"/LogIn"}>
              <a className="curved-button">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
