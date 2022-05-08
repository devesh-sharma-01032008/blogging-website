import React from 'react'
import Link from "next/link";


export default function NavBarLinks(props) {
  return (
    <li className={`${props.curvedButton} nav-link ${props.active}`}>
      <i className={`${props.className} icon-sm`}></i>
      <Link href={props.url}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}
