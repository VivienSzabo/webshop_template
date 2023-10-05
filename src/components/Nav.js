import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div><nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={`/`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
            <span className="nav-link">Hangszerek</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={`/uj-hangszer`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link">Új hangszer</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Nav;