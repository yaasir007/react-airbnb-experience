import React from "react";
import '../components/css/cards.css'
import Card from './Card'

import Katie from "../assets/cards/katieZaferes.png";
import WeddingGirl from "../assets/cards/weddingGirl.png";
import Bike from "../assets/cards/bike.png";



const Cards = () => {
  return (
    <div className="cards-wrapper">
      <Card
        image={Katie}
        name="Life lessons with Katie Zaferes"
        price="150"
      />

      <Card
        image={WeddingGirl}
        name="Learn wedding photography"
        price="200"
      />
      
      <Card
        image={Bike}
        name="Group Mountain Biking"
        price="50"
      />
    </div>
  )
}

export default Cards
