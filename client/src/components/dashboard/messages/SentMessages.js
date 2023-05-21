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
              <div>your list is empty</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function MessageText({ message }) {
  const [openButton, setOpenButton] = useState(false);
  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <>
      <hr />
      <div className="flex">
        <div className="flex">
          <div> {message.message_title}</div>
        </div>
        <button onClick={handleOpenButton}>open</button>
      </div>

      {openButton && <div>{message.message_text}</div>}
    </>
  );
}
export default SentMessages;
