import React from 'react'
import Link from "next/link";


export default function SocialLinks(props) {
  return (
    <div className="social-media-links">
      <i className={`${props.className} icon`}></i>
     <div className="social-link">
        <Link href={props.siteUrl}>
          <a>{props.siteName}</a>
        </Link>
      </div>
    </div>
  )
}
