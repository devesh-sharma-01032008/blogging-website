import React from 'react'
import Link from "next/link";


export default function NavBarLinks(props) {
  return (
    <li className={`${props.curvedButton} nav-link`}>
      <i className={`${props.className} icon`}></i>
      <Link href={props.url}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}
