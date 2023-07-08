import React, { useState, useEffect } from "react";
import Message from "./Message";
import EmptyList from "../EmptyList";

function SentMessages({ setShowSentMessages, name }) {
  const [allMessages, setAllMessages] = useState([]);
  const getMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages/sent", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();

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
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowSentMessages(false);
          }}
        >
          X
        </div>
        <h1>Sent Messages</h1>
        {allMessages.length !== 0 && allMessages[0].message_id !== null ? (
          allMessages.map((message) => {
            return (
              <Message
                message={message}
                name={name}
                setShowSentMessages={setShowSentMessages}
              />
            );
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}

export default SentMessages;
