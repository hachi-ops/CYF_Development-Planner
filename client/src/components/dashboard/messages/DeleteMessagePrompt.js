import React, { useState } from "react";

function DeleteMessagePrompt({
  handleToggleDeleteMessagePrompt,
  deleteMessage,
  message,
}) {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div className="relative">
        <div
          className="titleCloseBtn"
          onClick={handleToggleDeleteMessagePrompt}
        >
          X
        </div>
        <div>Do you want to delete this message?</div>
        <div className="buttons">
          {" "}
          <button onClick={() => deleteMessage(message.message_id)}>
            {" "}
            yes
          </button>
          {visible && <button onClick={removeElement}>Remove</button>}
          <button onClick={handleToggleDeleteMessagePrompt}>cancel</button>
        </div>
      </div>
    </>
  );
}

export default DeleteMessagePrompt;
