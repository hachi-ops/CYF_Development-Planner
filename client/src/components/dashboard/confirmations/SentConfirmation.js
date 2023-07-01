import React from "react";

function SentConfirmation({ setSentConfirmation, setToggleSend }) {
  return (
    <>
      <div className="relative prompt">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setToggleSend(false);
            setSentConfirmation(false);
          }}
        >
          X
        </div>
        <div>file sent</div>
        <button
          onClick={() => {
            setSentConfirmation(false);
            setToggleSend(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default SentConfirmation;
