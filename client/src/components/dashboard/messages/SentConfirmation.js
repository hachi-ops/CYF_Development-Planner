import React from "react";

function SentConfirmation({ setShowSentConfirmation }) {
  return (
    <>
      <div className="show-element">
        <button
          className="titleCloseBtn"
          onClick={() => {
            setShowSentConfirmation(false);
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
