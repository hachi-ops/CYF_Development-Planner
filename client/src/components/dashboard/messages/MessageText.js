import React, { useState } from "react";

function MessageText({ message }) {
  const [openButton, setOpenButton] = useState(false);
  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <>
      <hr />
      <div className="flex">
        {" "}
        <div className="flex">
          <div> {message.message_title}</div>
        </div>
        <button onClick={handleOpenButton}>open</button>
      </div>

      {openButton && (
        <MessageModal message={message} setOpenButton={setOpenButton} />
      )}
    </>
  );
}

function MessageModal({ message, setOpenButton }) {
  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setOpenButton(false);
          }}
        >
          X
        </div>
        <div>{message.message_text}</div>
      </div>
    </>
  );
}

export default MessageText;
