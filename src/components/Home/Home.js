import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideogames } from "../../redux/action/index";
import Card from "../Cards/cards";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import '../Home/Home.css';
import Paginated from "../Paginated/Paginated";

function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

/* Paginado */
const [pagina, setPagina] = useState(1);
const [porPagina, /* setPorPagina */] = useState(16);


const maximo = Math.ceil(allVideogames.length / porPagina);


  return (
      <div>
      <Navbar />
      <h1 className="mt-5 pt-3">Videojuegos</h1>
      <div className="container-fluid">
        <div className="row">
          {allVideogames.slice(
            (pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina
          ).map((v) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 mt-3"
                key={v.id}
              >
                <Link className="text-decoration-none " to={`detail/${v.id}`}>
                <Card name={v.name} image={v.image} rating={v.rating} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Paginated pagina={pagina} setPagina={setPagina} maximo={maximo}/>
    </div>
  );
}

export default Home;
