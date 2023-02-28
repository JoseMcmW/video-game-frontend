import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getVideogames} from "../../redux/action/index";
import Card from "../Cards/cards";

function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.videogames);
  useEffect (() => {
    dispatch(getVideogames())
  }, [dispatch]);

  return (
  <div>
    <h1>Videojuegos</h1>
    <div className="container">
     <div className="row">
      {allVideogames.map(v => {
        return (<div className="col col-md-6 col-lg-3" key={v.id}>
                  <Card name = {v.name} image = {v.image} rating = {v.rating}/>
                </div>)
      })}
    </div>
    </div>
  </div>)
}

export default Home;
