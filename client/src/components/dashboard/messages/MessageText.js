import React, { useState } from "react";

import DeleteButton from "../files/DeleteButton";
import DeleteMessageButton from "./DeleteMessageButton";
function MessageText({ message }) {
  const [openButton, setOpenButton] = useState(false);
  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div>
        {visible && (
          <div>
            <hr />
            <div className="flex">
              <h4>{message.sender_username}</h4>
              <div>{message.message_title}</div>
              <div>{message.message_id}</div>
            </div>
            <div className="flex">
              <DeleteMessageButton removeElement={removeElement} />
            </div>
          </div>
        )}
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
      <div className="relative">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setOpenButton(false);
          }}
        >
          X
        </div>
        <DeleteButton />
        <div>{message.message_title}</div>
        <div>{message.message_text}</div>
      </div>
    </>
  );
}

export default MessageText;
