import React, { useState, useEffect } from "react";
import EmptyList from "../EmptyList";
function ReceivedMessages({ setShowReceivedMessages }) {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const getReceivedMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages/received", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);
      setReceivedMessages(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getReceivedMessages();
  }, []);
  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowReceivedMessages(false);
          }}
        >
          X
        </div>
        <h1>Sent Messages</h1>
        {receivedMessages.length !== 0 &&
        receivedMessages[0].message_id !== null ? (
          receivedMessages.map((message) => {
            return (
              <div>
                <h2>{message.sender_username}</h2>
                <h2>{message.message_title}</h2>
                <p>{message.message_text}</p>
              </div>
            );
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}

export default ReceivedMessages;
