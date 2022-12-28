import React, { useEffect, useState } from "react";

const ListFeedbacks = ({ allFeedbacks }) => {
  console.log(allFeedbacks);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setFeedbacks(allFeedbacks);
  }, [allFeedbacks]);

  //delete todo function

  async function deleteFeedback(id) {
    try {
      await fetch(`http://localhost:4000/dashboard/feedbacks/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setFeedbacks(feedbacks.filter((feedback) => feedback.feedback_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length !== 0 &&
            feedbacks[0].feedback_id !== null &&
            feedbacks.map((feedback) => (
              <tr key={feedback.feedback_id}>
                <td>{feedback.feedback}</td>

                <td>
                  <button onClick={() => deleteFeedback(feedback.feedback_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListFeedbacks;
