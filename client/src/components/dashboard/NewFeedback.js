import React, { useState } from "react";
import BackButton from "../BackButton";

import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function NewFeedback() {
  const [feedbackText, setFeedbackText] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);
      const body = { feedbackText };
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
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <BackButton />

      <h1>Insert Feedback</h1>
      <form onSubmit={onSubmitForm}>
        <button>Add</button>
        <textarea
          placeholder="add"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        ></textarea>

        <Editor
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
      </form>
    </>
  );
}

export default NewFeedback;
