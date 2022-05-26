import Link from "next/link";
import React from "react";
import { getCookie } from "cookies-next";
import Menu from "../reusable_components/Menu";
import { useState,useEffect } from "react";
import NavBarLinks from "../reusable_components/NavBarLinks";

export default function Header() {
  const [cookie] = useState(getCookie("API_KEY"));
  const [name] = useState(getCookie("NAME"));
  const [position,setPosition] = useState("-100%");
  const [reloaderWidth, setReloaderWidth ] = useState("0%");
  const toggleMenu = ()=>{
    position == "-100%" ? setPosition("0%") : setPosition("-100%");
  }
  const startReloader = ()=>{
    setTimeout(()=>{
      setReloaderWidth("30%");
      setTimeout(()=>{
        setTimeout(()=>{
          setReloaderWidth("70%");
          setReloaderWidth("100%");
        setTimeout(()=>{
          setReloaderWidth("0%");
        },100);
      },100);
        },100);
    },100);

    useEffect(()=>{
      const links = document.getElementsByTagName("a");
      Array.from(links).forEach((link)=>{
        link.addEventListener("click", startReloader);
      })
      console.log("started");
    },[]);
  }
  return (
    <header>
      <div className="reloader" style={{width:reloaderWidth}}></div>
      <Menu event={toggleMenu}/>
      <h1 className="logo">
        i<span>Blog</span>
      </h1>
      <nav className="nav-bar"  style={{left:position}}>
        <ul>
          <NavBarLinks url={'/'} title={"Home"} className={"fa-solid fa-house"} active={"active"}/>
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
