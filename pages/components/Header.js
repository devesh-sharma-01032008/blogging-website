import Link from "next/link";
import React from "react";
import { getCookie } from "cookies-next";
import Menu from "../reusable_components/Menu";
import { useState } from "react";
import NavBarLinks from "../reusable_components/NavBarLinks";
export default function Header() {
  const [cookie] = useState(getCookie("API_KEY"));
  const [name] = useState(getCookie("NAME"));

  return (
    <header>
      <Menu />
      <h1 className="logo">
        i<span>Blog</span>
      </h1>
      <nav className="nav-bar">
        <ul>
          <NavBarLinks url={'/'} title={"Home"} className={"fa-solid fa-house"}/>
          <NavBarLinks url={'/Blogs'} title={"Blogs"} className={"fa-brands fa-blogger"} />
          <NavBarLinks url={'/ContactUs'} title={"Contact Us"} className={"fa-solid fa-address-card"} />
          {
            cookie != undefined ? <NavBarLinks url={"/"} title={name} curvedButton={"curved-button"} className={"fa-solid fa-user"}/>
              : <>
                <NavBarLinks url={"/SignUp"} title={"Create Account"} curvedButton={"curved-button"} className={"fa-solid fa-plus"}/>
                <NavBarLinks url={"/LogIn"} title={"Login"} curvedButton={"curved-button"} className={"fa-solid fa-right-to-bracket"}/>
              </>
          }
        </ul>
      </nav>
    </header>
  );
}
