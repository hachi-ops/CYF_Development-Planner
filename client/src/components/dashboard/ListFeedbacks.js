import React, { useState, useEffect } from "react";

function ListFeedbacks({ allFeedbacks }) {
  console.log(allFeedbacks);
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    setFeedbacks(allFeedbacks);
  }, [allFeedbacks]);

  console.log(feedbacks);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length !== 0 &&
            feedbacks[0].feedback_id !== null &&
            feedbacks.map((feedback) => (
              <tr key={feedback.feedback_id}>
                <td>{feedback.feedback_text}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ListFeedbacks;
