import React, { useState, useEffect } from "react";
import MessageText from "./MessageText";
import EmptyList from "../EmptyList";
import DeleteButton from "../files/DeleteButton";

function SentMessages({ setShowSentMessages }) {
  const [allMessages, setAllMessages] = useState([]);
  const getMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages/sent", {
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
              <div>
                <MessageText
                  message={message}
                  setShowSentMessages={setShowSentMessages}
                />
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

export default SentMessages;
