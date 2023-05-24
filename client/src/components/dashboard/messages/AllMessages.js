import React, { useState, useEffect } from "react";

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

export default AllMessages;
