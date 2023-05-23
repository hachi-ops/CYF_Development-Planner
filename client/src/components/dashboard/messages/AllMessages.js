import React, { useState, useEffect } from "react";
import SendNewMessage from "./SendNewMessage";
import EmptyList from "../EmptyList";

function AllMessages({ name, setShowAllMessages }) {
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
      <div className="list-files">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setShowAllMessages(false);
            }}
          >
            X
          </div>
        </div>
        {allMessages.length !== 0 && allMessages[0].messageid !== null ? (
          allMessages.map((message) => {
            return (
              <>
                <Message
                  message={message}
                  name={name}
                  setShowAllMessages={setShowAllMessages}
                />
              </>
            );
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}

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

export default AllMessages;
