import React, { useState } from "react";

const InsertFeedback = ({ setFeedbacksChange, setAuth }) => {
  const [feedback, setFeedback] = useState("");
  //   console.log(feedback);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { feedback };
      const response = await fetch(
        "http://localhost:4000/dashboard/feedbacks",
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(body),
        }
      );

      const parseResponse = await response.json();

      console.log(parseResponse);

      setFeedbacksChange(true);
      setFeedback("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1>Insert Feedback</h1>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button>save</button>
        <button>send</button>
      </form>
    </>
  );
};

export default InsertFeedback;
