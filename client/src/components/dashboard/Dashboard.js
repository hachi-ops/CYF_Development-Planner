import React, { useState, useEffect } from "react";

import Files from "./Files";
import ListFeedbacks from "./ListFeedbacks";
import Inbox from "./Inbox";

function Dashboard({ setAuth }) {
  const [name, setName] = useState("");
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [feedbacksChange, setFeedbacksChange] = useState(false);

  const getName = async () => {
    try {
      const res = await fetch("/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      console.log(parseRes);
      setAllFeedbacks(parseRes);
      setName(parseRes[0].username);
    } catch (err) {
      console.error(err.message);
    }
  };

  // const logout = async (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setAuth(false);
  // };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
    setFeedbacksChange(false);
  }, [feedbacksChange]);

  return (
    <>
      <section>
        <h1 className="heading"> {name}'s Dashboard</h1>
        <div className="login-signin-buttons">
          <button onClick={(e) => logout(e)}>Logout</button>
        </div>
        <Files setFeedbacksChange={setFeedbacksChange} />
        <ListFeedbacks
          allFeedbacks={allFeedbacks}
          setFeedbacksChange={setFeedbacksChange}
        />
        <Inbox />
      </section>
    </>
  );
}

export default Dashboard;
