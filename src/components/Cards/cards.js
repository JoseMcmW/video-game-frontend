import React from "react";
import '../Cards/cards.css';


function Card ({name, image, rating}) {
  return (
  <div className="card h-100">
  <img src={image} className="card-img-top" alt="..." style={{height: '200px'}} />
  <div className="card-body d-flex flex-wrap align-items-center">
    <h3 className="card-text">{name}</h3>
    <p className="mb-0">{rating}</p>
  </div>
</div>
)}

export default Card;