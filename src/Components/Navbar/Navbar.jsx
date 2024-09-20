import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar-component">
      <div className="logo">
        <li>
          <Link className="link" to="/">
            Hotel Kp Pride
          </Link>
        </li>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              to="/rooms"
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/rooms-images"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/about-us"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
