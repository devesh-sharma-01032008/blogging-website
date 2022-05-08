import React from "react";
import SocialLinks from "../reusable_components/SocialLinks";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="social-links-container">
        <SocialLinks siteName={"Facebook"} siteUrl={"/"} className={"fa-brands fa-facebook-square icon"}/>
        <SocialLinks siteName={"Github"} siteUrl={"/"} className={"fa-brands fa-instagram"}/>
        <SocialLinks siteName={"LinkedIn"} siteUrl={"/"} className={"fa-brands fa-github"}/>
        <SocialLinks siteName={"Instagram"} siteUrl={"/"} className={"fa-brands fa-instagram"}/>
      </div>
      <div className="copyright">&copy; iBlogs 2021-22</div>
    </footer>
  );
}
