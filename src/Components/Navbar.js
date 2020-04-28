import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={{ position: "fixed" }}>
      <a className="navbar-brand" href="#">
        Online-Study
      </a>
      <div className="nav_usr">
        <button
          className="btn btn-primary"
          onClick={() => props.clickHandler("signin")}
        >
          Sign In
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-warning"
          onClick={() => props.clickHandler("signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
