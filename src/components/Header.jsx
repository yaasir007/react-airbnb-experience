import React from 'react'
import './css/header.css'
import Logo from '../assets/logo/logo.png';

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="" />
    </nav>
  )
}
