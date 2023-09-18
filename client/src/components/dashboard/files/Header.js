import React from "react";

function Header({ title }) {
  return <h2>Your {title}</h2>;
}
Header.defaultProps = {
  title: "Default Title",
};
export default Header;
