import React from 'react'
import './header.css'
import Logo from '../assets/header/logo/logo.png';

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="" />
    </nav>
  )
}
