import React from "react";

function Card ({name, image, rating}) {
  return (
  <div className="card" style={{ width: '20rem', height: '18rem', margin: '2em' }}>
  <img src={image} className="card-img-top" alt="..." style={{height: '150px'}} />
  <div className="card-body">
    <h3 className="card-text">{name}</h3>
    <p>{rating}</p>
  </div>
</div>
)}

export default Card;