import React from "react";

function Card ({name, image, rating}) {
  return (
    <div>
      <img src={image} alt="card"/>
      <h3>{name}</h3>
      <h3>{rating}</h3>
    </div>
  )
}

export default Card;