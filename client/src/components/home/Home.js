import React from "react";

import Intro from "./Intro";

import Heading from "./Heading";
import LoginSignInButtons from "./LoginSignInButtons";

function Home() {
  return (
    <>
      <header className="header">
        <Heading />
        <LoginSignInButtons />
      </header>
      <Intro />
    </>
  );
}

export default Home;
