import React from "react";

//components
import Back from "../Back";
import NavigateHome from "../NavigateHome";

import Navbar from "./Navbar";
import DisplayName from "./DisplayName";

function Dashboard({ setAuth }) {
  const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <>
      <Back />
      <NavigateHome />
      <button onClick={(e) => logout(e)}>Logout</button>
      <DisplayName />

      <Navbar />
    </>
  );
}

export default Dashboard;
