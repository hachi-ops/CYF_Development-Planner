import React from "react";

// components
import Heading from "./home_components/Heading";
import Intro from "./home_components/Intro";
import LoginSignInButtons from "./home_components/LoginSignInButtons";

// images
import cat from "../../images/cat.jpg";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
