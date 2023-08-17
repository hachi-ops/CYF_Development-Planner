import React, { useState, useEffect } from "react";

import boxes from "./boxes";
import DraftsList from './files/DraftsList'
// components
import Logout from "./controls/Logout";
// import DashboardNavigation from "./controls/DashboardNavigation";

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

  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e) => {
    
    setCurrentTab(e.target.id);




  };

  return (
    <>
      <div data-testid="dashboard">
        <header className="header">
          <Logout setAuth={setAuth} />
          <h1>{user.username}'s Dashboard</h1>
        </header>
        {/* <DashboardNavigation user={user} handleUpdate={handleUpdate} /> */}

        <div className="container">
          <div className="tabs flex">
            {boxes.map((tab, i) => (
              <button
                key={i}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                onClick={handleTabClick}
              >
                {tab.title}
                <img
                  src={tab.img}
                  alt="icon"
                  style={tab.imgStyle}
                  className="dashboard-icon"
                />
              </button>
            ))}
          </div>
          <div className="content ">
            {boxes.map((tab, i) => (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title">{tab.title}</p>
                    <img
                      src={tab.img}
                      alt="icon"
                      style={tab.imgStyle}
                      className="dashboard-icon"
                    />
                    <div>{tab.controls}</div>
                 {/* <DraftsList/> */}
                  </div>
          
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
