import React from "react";

function SentConfirmation({ setShowSentConfirmation }) {
  return (
    <>
      <div className="relative">
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
