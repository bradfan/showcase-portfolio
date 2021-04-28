import React from "react";

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
