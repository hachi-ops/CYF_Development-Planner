import React from "react";

// components
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <nav className="primary-nav">
        <Logo />
        <NavbarLink />
      </nav>
    </>
  );
}

export default Navbar;
