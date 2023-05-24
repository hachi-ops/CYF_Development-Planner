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
          <h4>{message.sender_username}</h4>
          <div>{message.message_title}</div>
        </div>
        <button onClick={handleMessageClicked}>open</button>
      </div>

      {messageClicked && (
        <div>
          <button onClick={sendAnswer}>{answerButtonText}</button>
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
