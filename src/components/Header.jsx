import React from 'react'
import './header.css'
import Logo from '../assets/header/logo/logo.png';

export default function Header() {
  return (
    <section className="nav">
      <div className="nav-container">
        <div className="nav-wrapper">
          <img src={Logo} alt="Logo of AirBnb" className='nav__logo' />
        </div>
      </div>
    </section>
  )
}
