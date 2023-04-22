import React, { useState, useEffect } from "react";

function SentMessages() {
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
            <div>{message.message_title}</div>
            <MessageText message={message} />
          </div>
        );
      })}
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
      <button onClick={handleOpenButton}>open text</button>
      <div className="flex">
        {openButton && <div>{message.message_text}</div>}
      </div>
    </>
  );
}
export default SentMessages;
