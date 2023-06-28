import React, { useState } from "react";
import SendNewMessage from "./SendNewMessage";
import DeleteMessageButton from "./DeleteMessageButton";
import DeleteMessagePrompt from "./DeleteMessagePrompt";

function Message({ message, name, deleteMessage, setMessagesChange }) {
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

  const [toggleDeleteMessagePrompt, setToggleDeleteMessagePrompt] =
    useState(false);

  const handleToggleDeleteMessagePrompt = () => {
    setToggleDeleteMessagePrompt(!toggleDeleteMessagePrompt);
  };

  return (
    <>
      <hr />

      <div className="flex">
        <div className="flex">
          {" "}
          <h4>{message.sender_username}</h4>
          <div>{message.message_title}</div>
          <div>{message.message_id}</div>
        </div>

        <div className="flex">
          {" "}
          <button onClick={handleMessageClicked}>open</button>
          <Remove />
        </div>
      </div>

      {toggleDeleteMessagePrompt && (
        <DeleteMessagePrompt
          handleToggleDeleteMessagePrompt={handleToggleDeleteMessagePrompt}
          message={message}
          deleteMessage={deleteMessage}
          setMessagesChange={setMessagesChange}
        />
      )}
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
            <DeleteMessageButton
              handleToggleDeleteMessagePrompt={handleToggleDeleteMessagePrompt}
              deleteMessage={deleteMessage}
              message={message}
              setMessagesChange={setMessagesChange}
            />
          </div>
          <div className="element-container">
            <div className="element-title">{message.message_title}</div>
            <div className="element-text">{message.message_text}</div>
          </div>

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

function Remove() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      Click to remove element
      <br />
      {visible && <button onClick={removeElement}>Remove</button>}
    </div>
  );
}

export default Message;
