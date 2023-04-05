import React, { useState, useEffect } from "react";
import Logout from "./dashboard/Logout";

import DashboardNavigation from "./dashboard/DashboardNavigation";
// import Menu from "./dashboard/Menu";
function Dashboard({ setAuth }) {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const res = await fetch("/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      console.log(parseRes);
      setUser(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="flex">
        <h1 className="heading">Dashboard {user.username}</h1>
        <Logout setAuth={setAuth} />
      </div>
      <DashboardNavigation user={user} />
      {/* <Menu /> */}
    </>
  );
}

export default Dashboard;
