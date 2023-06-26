import React from "react";

function DeleteMessagePrompt({
  handleToggleDeleteMessagePrompt,
  deleteMessage,
  message,

  setMessagesChange,
}) {
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
          <button onClick={handleToggleDeleteMessagePrompt}>cancel</button>
        </div>
      </div>
    </>
  );
}

export default DeleteMessagePrompt;
