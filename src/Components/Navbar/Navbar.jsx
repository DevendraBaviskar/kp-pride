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
              to="/"
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
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
              to="/restaurent"
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Restaurent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bar"
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Bar
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
              to="/nearby-transport"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              NearBy-Transport
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/tourist-places"
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "black",
              })}
            >
              Tourist-Places
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
              Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
