"use client";
import React, { useState } from "react";

import "bulma/css/bulma.min.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>MyApp</strong>
        </a>

        {/* Hamburger menu for mobile */}
        <button
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
            
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-info is-dark">Log in</a>
              <a className="button is-warning is-dark">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
