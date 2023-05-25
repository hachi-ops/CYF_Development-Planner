import React, { useState } from "react";
import SendNewMessage from "./SendNewMessage";

function Message({ message, name, setShowAllMessages }) {
  const [messageClicked, setMessageClicked] = useState(false);
  function handleMessageClicked() {
    setMessageClicked(!messageClicked);
  }

  const [answerField, setAnswerField] = useState(false);
  const [answerButtonText, setAnswerButtonText] = useState("answer");

  const sendAnswer = () => {
    // console.log("I was clicked");
    setAnswerField(!answerField);
    setAnswerButtonText((state) => (state === "answer" ? "cancel" : "answer"));
  };
  return (
    <>
      <hr />

      <div className="flex">
        <div className="flex">
          {" "}
          <h4>{message.sender_username}</h4>
          <div>{message.message_title}</div>
        </div>

        <div className="flex">
          {" "}
          <button onClick={handleMessageClicked}>open</button>
          <button>delete</button>
        </div>
      </div>

      {messageClicked && (
        <div className="show-element">
          <div
            className="titleCloseBtn"
            onClick={() => {
              setMessageClicked(false);
            }}
          >
            X
          </div>

          <div className="buttons">
            <button onClick={() => setMessageClicked(false)}>cancel</button>
            <button onClick={sendAnswer}>{answerButtonText}</button>
          </div>

          {message.message_text}
          {answerField && (
            <SendNewMessage
              senderUsername={name}
              receipientId={message.sender_id}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Message;
