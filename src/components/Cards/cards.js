import React from "react";

function Card ({name, image, rating}) {
  return (
  <div className="card h-100">
  <img src={image} className="card-img-top" alt="..." style={{height: '200px'}} />
  <div className="card-body">
    <h3 className="card-text">{name}</h3>
    <p>{rating}</p>
  </div>
</div>
)}

export default Card;