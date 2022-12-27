import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from ".././images/home-icon.png";

function NavigateHome() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={homeIcon} alt="home" />
        </NavLink>
      </nav>
    </>
  );
}

export default NavigateHome;
