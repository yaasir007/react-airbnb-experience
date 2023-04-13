import React from 'react'
import './hero.css'
import HeroImg from "../assets/hero/hero.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className='hero-wrapper'>
        <div className="hero-photo">
          <img src={HeroImg} alt="" className='hero__img' />
        </div>

        <div className="hero-content">
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    </div>
  )
}
