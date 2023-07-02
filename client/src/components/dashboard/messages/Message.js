import React, { useState } from "react";

function Message({ message }) {
  const [messageClicked, setMessageClicked] = useState(false);
  function handleMessageClicked() {
    setMessageClicked(!messageClicked);
  }

  const [answerField, setAnswerField] = useState(false);
  const [answerButtonText, setAnswerButtonText] = useState("answer");

  const sendAnswer = () => {
    setAnswerField(!answerField);
    setAnswerButtonText((state) => (state === "answer" ? "cancel" : "answer"));
  };

  return (
    <>
      <hr />
      <div className="flex-list">
        <div className="flex-list">
          {/* <h4>{message.sender_username}</h4> */}
          <div>{message.message_title}</div>
          {/* <div>{message.message_id}</div> */}
        </div>

        <button onClick={handleMessageClicked}>open</button>
      </div>

      {messageClicked && (
        <div className="relative">
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
          <div className="element-container">
            <h1 className="title">{message.message_title}</h1>
            <div className="text">{message.message_text}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
