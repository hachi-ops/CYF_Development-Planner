import React from "react";

function SentConfirmation({ setSentConfirmation, setToggleSend }) {
  return (
    <>
      <div className="relative">
        <div className="titleCloseBtn" onClick={() => setToggleSend(false)}>
          X
        </div>
        <button
          className="titleCloseBtn"
          onClick={() => {
            setSentConfirmation(false);
            setToggleSend(false);
          }}
          id="cancelBtn"
        >
          OK
        </button>
        <div>file sent</div>
      </div>
    </>
  );
}

export default SentConfirmation;
