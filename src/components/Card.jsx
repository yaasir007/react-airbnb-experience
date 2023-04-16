import React from "react"
import "./css/card.css"
import Katie from "../assets/cards/katieZaferes.png";
import Star from '../assets/cards/star.png'

const Card = () => {
    return (
        <div className="card-wrapper">
          <img src={Katie} alt="" className="card-img" />
          <div className="card--content">
            <div className="card--rating">
              <img src={Star} alt="" className='card-star'/>
              <span>5.0</span>
              <span>(6) • </span>
              <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="stat--bold">From $136 </span>/ person</p>
          </div>
        </div>
    )
}

export default Card
