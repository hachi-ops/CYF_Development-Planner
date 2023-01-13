import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../images/home-icon.png";
function PlansNavbar() {

  let location = useLocation();
  
  return (
    <>
      <nav>
        <Link to="/dashboard" state={{username: location.state.name}}>
          <img src={homeIcon} alt="home icon" />
        </Link>
      </nav>
    </>
  );
}

export default PlansNavbar;
