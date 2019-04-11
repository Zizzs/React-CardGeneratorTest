import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <div id="mainDiv">
        <p>
          <NavLink className="mainLinks" to="/">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink className="mainLinks" to="/CardGeneration">
            Card Generation Test
          </NavLink>
        </p>
      </div>
    );
  }
}

export default NavBar;
