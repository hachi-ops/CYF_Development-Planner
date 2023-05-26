import React from "react";

function XbuttonSentDrafts({ setShowSent }) {
  return (
    <div
      className="titleCloseBtn"
      onClick={() => {
        setShowSent(false);
      }}
    >
      X
    </div>
  );
}

export default XbuttonSentDrafts;
