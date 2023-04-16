import React from "react"
import "./css/card.css"
import Star from '../assets/cards/star.png'

const Card = (props) => {
    return (
        <div className="card-wrapper">
          <img src={props.image} alt="" className="card-img" />
          <div className="card--content">
            <div className="card--rating">
              <img src={Star} alt="" className='card-star'/>
              <span>5.0</span>
              <span>(6) • </span>
              <span>USA</span>
            </div>
            <p>{props.name}</p>
            <p><span className="stat--bold">From ${props.price} </span>/ person</p>
          </div>
        </div>
    )
}

export default Card
