import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink
            exact
            activeClassName="selected"
            to="/"
            className="nav-link"
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName="selected"
            to="/new"
            className="nav-link"
          >
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
