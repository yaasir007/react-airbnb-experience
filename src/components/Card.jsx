import React from "react"
import "./css/card.css"
import Katie from "../assets/cards/katieZaferes.png";
import Star from '../assets/cards/star.png'

const Card = () => {
    return (
        <div className="card-wrapper">
          <div className="card--img">
            <img src={Katie} alt="" />
            <div className="sticker">SOLD OUT</div>
          </div>

          <div className="card--content">
            <div className="card--rating">
              <div className="card--img"></div>
              <img src={Star} alt="" />
              <div>5.0 (6) USA</div>
            </div>
              <div>Life lessons with Katie Zaferes</div>
              <div>
                <span>From $136</span>
                / person
              </div>
          </div>
        </div>
    )
}

export default Card
