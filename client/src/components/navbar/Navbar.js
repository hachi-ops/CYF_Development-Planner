import React from "react";

// components
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

function Navbar() {
  return (
    <div>
      <nav className="primary-nav">
        <Logo />
        <NavbarLink />
      </nav>
    </div>
  );
}

export default Navbar;
