import React, { useState, useEffect } from "react";

// components
import Logout from "./controls/Logout";
import DashboardNavigation from "./controls/DashboardNavigation";

function Dashboard({ setAuth }) {
  const [user, setUser] = useState({});
  const [updateUser, setUpdateUser] = useState(false);

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

  const handleUpdate = () => {
    setUpdateUser(!updateUser);
  };

  useEffect(() => {
    getUser();
  }, [updateUser]);

  return (
    <div data-testid="dashboard">
      <header className="header" title="header">
        <Logout setAuth={setAuth} />
        <h1>{user.username}'s Dashboard</h1>
      </header>
      <DashboardNavigation user={user} handleUpdate={handleUpdate} />
    </div>
  );
}

export default Dashboard;
