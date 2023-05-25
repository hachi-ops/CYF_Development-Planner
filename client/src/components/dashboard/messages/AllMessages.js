import React, { useState, useEffect } from "react";

// components
import EmptyList from "../EmptyList";
import Message from "./Message";

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
      <div className="show-element">
        <h1>All Messages</h1>
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowAllMessages(false);
          }}
        >
          X
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

export default AllMessages;
