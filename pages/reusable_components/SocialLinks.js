import React from 'react'
import Link from "next/link";


export default function SocialLinks(props) {
  return (
    <div className="social-media-links">
    <icon className={props.iconClass}></icon>
    <div className="github-link">
      <Link href={props.siteUrl}>
        <a>{props.siteName}</a>
      </Link>
    </div>
  </div>
  )
}
