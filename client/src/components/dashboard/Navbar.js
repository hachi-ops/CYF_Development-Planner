import React from "react";
import NavigateToMessages from "./NavigateToMessages";
import NavigateToFeedbacks from "./NavigateToFeedbacks";

function Navbar() {
  return (
    <nav className="dash-nav">
      <NavigateToFeedbacks />
      <NavigateToMessages />
    </nav>
  );
}

export default Navbar;
