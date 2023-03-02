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
    <h1 className="mt-3">Videojuegos</h1>
    <div className="container-fluid">
     <div className="row">
      {allVideogames.map(v => {
        return (<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 mt-3" key={v.id}>
                  <Card name = {v.name} image = {v.image} rating = {v.rating}/>
                </div>)
      })}
    </div>
    </div>
  </div>)
}

export default Home;
