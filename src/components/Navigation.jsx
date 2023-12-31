import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import "./navigation.scss";
import { NavLink } from "react-router-dom";
import burgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className={`nav ${open ? "show" : ""}`}>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span> HOME
            </NavLink>
            <NavLink to="/destination">
              <span>01</span> DESTINATION
            </NavLink>
            <NavLink to="/crew">
              <span>02</span> CREW
            </NavLink>
            <NavLink to="/technology">
              <span>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
        <div
          className="burger"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img
              src={closeIcon}
              alt=""
            />
          ) : (
            <img
              src={burgerIcon}
              alt=""
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
