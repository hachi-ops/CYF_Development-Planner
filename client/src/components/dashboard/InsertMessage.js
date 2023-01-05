import React, { useState } from "react";
import BackButton from "../BackButton";

const InsertMessage = ({ setMessagesChange }) => {
  const [message, setMessage] = useState("");
  console.log(message);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { message };
      const response = await fetch("http://localhost:4000/messages", {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setMessagesChange(true);
      setMessage("");
      window.location = "/messages";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <BackButton />
      <h1>Insert Message</h1>
      <form onSubmit={onSubmitForm}>
        <textarea
          type="text"
          placeholder="insert message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Add</button>
      </form>
    </>
  );
};

export default InsertMessage;
