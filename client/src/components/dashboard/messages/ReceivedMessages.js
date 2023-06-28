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
        <h1>Received Messages</h1>

        {receivedMessages.length !== 0 &&
        receivedMessages[0].message_id !== null ? (
          receivedMessages.map((message) => {
            return (
              <div>
                <hr />
                <div className="flex">
                  <p>{message.sender_username}</p>
                  <p>{message.message_title}</p>
                  {/* <p>{message.message_text}</p> */}
                </div>
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
