import React, { useState } from "react";

const EditFeedback = ({ feedback, setFeedbacksChange }) => {
  //editText function

  const editText = async (id) => {
    try {
      const body = { feedbackText };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch(`http://localhost:4000/dashboard/feedbacks/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      setFeedbacksChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [feedbackText, setFeedbackText] = useState(feedback.feedbackText);
  return (
    <>
      <button type="button" data-target={`#id${feedback.feedback_id}`}>
        Edit
      </button>

      <div
        id={`id${feedback.feedback_id}`}
        onClick={() => setFeedbackText(feedback.feedbackText)}
      >
        <h4>Edit Todo</h4>
        <button
          type="button"
          onClick={() => setFeedbackText(feedback.feedbackText)}
        >
          &times;
        </button>
      </div>

      <div>
        <input
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
      </div>

      <div>
        <button type="button" onClick={() => editText(feedback.feedback_id)}>
          Edit
        </button>
        <button
          type="button"
          onClick={() => setFeedbackText(feedback.feedbackText)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default EditFeedback;
