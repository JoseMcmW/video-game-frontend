import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getVideogameById } from "../../redux/action";
import '../VideogameDetail/VideogameDetail.css';
import Navbar from "../Navbar/Navbar";

const VideogameDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const detail = useSelector((state) => state.videogameByID);

  useEffect(() => {
    dispatch(getVideogameById(id));
  }, [dispatch, id]);

  return (
    <><Navbar /><div className="card mt-5 mb-3 pt-4 px-5">
      <div className="row g-0">
        <div className="col-1 d-flex align-items-start">
        <Link to="/home"><i className="bi bi-caret-left-fill btn btn-dark"></i></Link>
        </div>
        <div className="col-11">
        <h1 className="mb-5">Videojuego</h1>
        </div>
        <div className="col p-5 d-flex align-items-center color">
          <img
            src={detail.image}
            className="img-fluid rounded-start text-center"
            alt="..." />
        </div>
        <div className="col ">
          <div className="card-body-1">
            <h5 className="card-title">{detail.name}</h5>
            <p className="card-text-description px-4">{detail.description}</p>
            <h6>Platforms:</h6>
            {detail.platforms &&
              detail.platforms.map((p, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li className="list-unstyled">{p.name}
                        {p.name === "PC" ? <div className="text-recommended">{p.requirements.recommended}</div> : ""}
                      </li>
                    </ul>
                  </div>
                );
              })}
            <p className="card-text">
              <small className="text-muted">Rating: {detail.rating}</small>
            </p>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default VideogameDetail;
