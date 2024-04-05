import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-warning vw-100">
      <form className="container-fluid justify-content-start">
        <Link to={"/"} className="btn btn-success me-2" type="button">
          <i class="fa-solid fa-house" style={{ color: "#FFD43B" }}></i>Home
        </Link>
        <Link to={"/userDetails"} className="btn btn-success" type="button">
          <i class="fa-solid fa-user" style={{ color: "#FFD43B" }}></i>User
          Details
        </Link>
        <Link to={"/create"} className="btn btn-primary ms-3" type="button">Create</Link>
      </form>
    </nav>
  );
};

export default Navbar;
