import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchVideogame } from "../../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

/*   useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]); */

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchVideogame(search));
    setSearch("")
  };

  return (
    <div>
      <nav className="navbar bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            VideoJuegos
          </Link>
          <form onClick={e => handleSearch(e)} className="d-flex" role="search">
            <input
              onChange={e => handleSubmit(e)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
