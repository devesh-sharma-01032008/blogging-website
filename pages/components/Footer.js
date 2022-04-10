import React from "react";
import SocialLinks from "../reusable_components/SocialLinks";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="social-links-container">
        <SocialLinks siteName={"Facebook"} siteUrl={"/"}/>
        <SocialLinks siteName={"Github"} siteUrl={"/"}/>
        <SocialLinks siteName={"LinkedIn"} siteUrl={"/"}/>
        <SocialLinks siteName={"Instagram"} siteUrl={"/"}/>
      </div>
      <div className="copyright">&copy; iBlogs 2021-22</div>
    </footer>
  );
}
