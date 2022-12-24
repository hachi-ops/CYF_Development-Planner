import React, { useState, useEffect } from "react";
import EditFeedback from "./EditFeedback";
function ListFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  //delete feedback function

  async function deleteFeedback(id) {
    try {
      await fetch(`http://localhost:4000/feedbacks/${id}`, {
        method: "DELETE",
      });

      setFeedbacks(feedbacks.filter((feedback) => feedback.feedback_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  async function getFeedbacks() {
    const res = await fetch("http://localhost:4000/feedbacks");

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
      <h1>List Feedbacks</h1>
      <table>
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => {
            return (
              // <tr key={feedback.feedback_id}>
              //   <td>{feedback.feedback}</td>

              <tr key={feedback.feedback_id}>
                <td>{feedback.feedback}</td>
                <td>
                  <button>
                    <EditFeedback />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteFeedback(feedback.feedback_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListFeedbacks;
