import React from "react";
import cat from "../../images/cat.jpg";

function Intro() {
  return (
    <>
      <div className="header-flex">
        <h2 className="subheading">
          CYF Development Planner is a communication tool for our graduates and
          mentors. It is designed to help graduates to take control of their
          professional development, plan their own learning schedule and receive
          feedback from mentors.
        </h2>
        <img
          alt="cat paw on a computer keyboard"
          src={cat}
          className="header-img"
        />
      </div>
    </>
  );
}

export default Intro;
