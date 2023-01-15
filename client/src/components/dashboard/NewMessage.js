import React, { useState } from "react";
import BackButton from "../BackButton";
// import { Editor } from "react-draft-wysiwyg";
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function NewMessage() {
  const [messageText, setMessageText] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);
      const body = { messageText };
      const response = await fetch("/messages", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1>Insert message text</h1>
      <BackButton />
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button>Add</button>
        {/* <Editor
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        /> */}
      </form>
    </>
  );
}

export default NewMessage;
