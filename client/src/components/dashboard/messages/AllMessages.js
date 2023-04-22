import React, { useState, useEffect } from "react";
import SendNewMessage from "./SendNewMessage";

function AllMessages({ name }) {
  const [allMessages, setAllMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);
      setAllMessages(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {allMessages.map((message) => {
        return (
          <>
            <div className="flex">
              <h3>{`from: ${message.sender_username}`}</h3>
              <div>{message.message_title}</div>
            </div>
            <Message message={message} name={name} />
          </>
        );
      })}
    </>
  );
}

function Message({ message, name }) {
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
      <button onClick={handleMessageClicked}>open message</button>
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

export default AllMessages;
