import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogameById } from "../../redux/action";

const VideogameDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const detail = useSelector((state) => state.videogameByID);
  console.log("DETALLEVIDEO", detail);

  useEffect(() => {
    dispatch(getVideogameById(id));
  }, [dispatch, id]);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={detail.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{detail.name}</h5>
            <p className="card-text">{detail.description}</p>
            {detail.platforms &&
              detail.platforms.map((p, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>{p.name}</li>
                    </ul>
                  </div>
                );
              })}
            <p className="card-text">
              <small className="text-muted">{detail.rating}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideogameDetail;
