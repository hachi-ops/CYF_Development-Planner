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
        <div className="flex">
          <div> {message.message_title}</div>
        </div>
        <button onClick={handleOpenButton}>open</button>
      </div>

      {openButton && <div>{message.message_text}</div>}
    </>
  );
}

export default MessageText;
