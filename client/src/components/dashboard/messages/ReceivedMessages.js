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
              <>
                <hr />
                <div className="flex-list">
                  <div className="flex-list-buttons ">
                    <p>
                      <span>Title: </span>
                      {message.message_title}
                    </p>
                  </div>
                  <button>open</button>
                </div>
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

export default ReceivedMessages;
