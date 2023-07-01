import React from "react";

function SentConfirmation({ setSentConfirmation, setToggleSend }) {
  return (
    <>
      <div className="relative">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setToggleSend(false);
          }}
        >
          X
        </div>
        <button
          onClick={() => {
            setSentConfirmation(false);
            setToggleSend(false);
          }}
        >
          OK
        </button>
        <div>file sent</div>
      </div>
    </>
  );
}

export default SentConfirmation;
