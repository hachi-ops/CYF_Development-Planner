import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from ".././images/home-icon.png";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={homeIcon} alt="home" />
        </NavLink>
        {/* <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/feedbacks">Feedbacks</NavLink>
        <NavLink to="/mentor-dash">Dashboard</NavLink> */}
      </nav>
    </>
  );
}

export default Navbar;
