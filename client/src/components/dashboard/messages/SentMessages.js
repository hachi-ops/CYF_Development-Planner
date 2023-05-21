import React, { useState, useEffect } from "react";

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
      {allMessages.map((message) => {
        return (
          <div>
            <MessageText
              message={message}
              setShowSentMessages={setShowSentMessages}
            />
          </div>
        );
      })}
    </>
  );
}

function MessageText({ message, setShowSentMessages }) {
  const [openButton, setOpenButton] = useState(false);
  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <>
      <div className="list-files">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <div
              onClick={() => {
                setShowSentMessages(false);
              }}
            >
              X
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div>{message.message_title}</div>
          </div>
          <button onClick={handleOpenButton}>open</button>
        </div>
        <hr />
        {openButton && <div>{message.message_text}</div>}
      </div>
    </>
  );
}
export default SentMessages;
