import React, { useState, useEffect } from "react";

// components
import EmptyList from "../EmptyList";
import Message from "./Message";

function AllMessages({ name, setShowAllMessages }) {
  const [allMessages, setAllMessages] = useState([]);
  const [messagesChange, setMessagesChange] = useState(false);

  const getMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages", {
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
    setMessagesChange(false);
  }, [messagesChange]);

  //delete message function

  const [messages, setMessages] = useState([]); //empty array
  async function deleteMessage(id) {}

  useEffect(() => {
    setMessages(allMessages);
  }, [allMessages]);
  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowAllMessages(false);
          }}
        >
          X
        </div>
        <h1>All Messages</h1>
        {messages.length !== 0 && messages[0].message_id !== null ? (
          messages.map((message) => {
            return (
              <>
                <Message
                  message={message}
                  name={name}
                  setShowAllMessages={setShowAllMessages}
                  deleteMessage={deleteMessage}
                  setMessagesChange={setMessagesChange}
                  allMessages={allMessages}
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
