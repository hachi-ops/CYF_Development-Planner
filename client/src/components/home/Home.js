import React from "react";

import "../../styles/media.css";
// components
import Heading from "./Heading";
import Intro from "./Intro";
import LoginSignInButtons from "./LoginSignInButtons";

// images
import cat from "../../images/cat.jpg";

function Home() {
  return (
    <>
      <div className="landing">
        <Heading />
        <div className="flex-reverse">
          <Intro />
          <div className="landing-flex">
            <img
              alt="cat paw on a computer keyboard"
              src={cat}
              className="landing-img"
            />
            <LoginSignInButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
