import React from "react";

import { NavLink } from "react-router-dom";

// images
import dashIcon from "../../images/icons8-dashboard-48.png";
import homeIcon from "../../images/icons8-home-page-24.png";

function NavbarLink() {
  return (
    <>
      <div className="nav-links-container">
        <NavLink to="/" className="nav-link">
          <img alt="home link icon" src={homeIcon} />
          <p>Home</p>
        </NavLink>
        <NavLink to="dashboard" className="nav-link">
          <img alt="dashboard link icon" src={dashIcon} />
          <p>Dashboard</p>
        </NavLink>
      </div>
    </>
  );
}

export default NavbarLink;
