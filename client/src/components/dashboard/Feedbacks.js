import React, { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import InsertFeedback from "./feedbacksList/InsertFeedback";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const showSentFeedbacks = searchParams.get("filter") === "active";

  async function getFeedbacks() {
    const res = await fetch("http://localhost:4000/dashboard", {
      method: "GET",
      headers: { token: localStorage.token },
    });

    const feedbacksArray = await res.json();

    console.log(feedbacksArray);

    setFeedbacks(feedbacksArray);
  }
  useEffect(() => {
    getFeedbacks();
  }, []);

  console.log(feedbacks);

  return (
    <>
      <h1>Feedbacks</h1>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        sent feedbacks
      </button>
      <button onClick={() => setSearchParams({})}>all feedbacks</button>
      {showSentFeedbacks ? (
        <h2>Showing sent feedbacks</h2>
      ) : (
        <h2>Showing all feedbacks</h2>
      )}
      {feedbacks.map((feedback) => {
        return (
          <ul key={feedback.feedback_id}>
            <li>{feedback.feedback}</li>
            <button>open</button>
          </ul>
        );
      })}
      <InsertFeedback />
    </>
  );
}

export default Feedbacks;

// const logout = async (e) => {
//   e.preventDefault();
//   localStorage.removeItem("token");
//   setAuth(false);
// };

// useEffect(() => {
//   getName();
//   setFeedbacksChange(false);
// }, [feedbacksChange]);
