import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">VideoJuegos</Link>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  )
}

export default Navbar;