import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/feedbacks">Feedbacks</NavLink>
        <NavLink to="/mentor-dash">Dashboard</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
