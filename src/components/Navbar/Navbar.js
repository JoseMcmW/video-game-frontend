import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchVideogame } from "../../redux/action";
import { getVideogames } from "../../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchVideogame(search));
    setSearch("");
  };

  const goToHome = (e) => {
    e.preventDefault()
    dispatch(getVideogames());
  }

  return (
    <div>
      <nav className="navbar bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" onClick={goToHome}>
            VideoJuegos
          </Link>
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              onChange={handleSubmit}
              className="form-control me-2"
              type="search"
              placeholder="Search Videogame"
              aria-label="Search"
              value={search}
            />
            <button className="btn btn-dark" type="submit" value="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
