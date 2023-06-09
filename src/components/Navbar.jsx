import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar px-3">
      <Link className="navbar-brand d-flex text-light" to={''} title="Return to Homepage">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img alt="logo" src={`https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png`} height="45" />
        </div>
        <div className="ps-1">
          <span className="fs-1">
            Reactwork
          </span>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li>
            <Link to={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
      </div > */}
    </nav >
  )
}