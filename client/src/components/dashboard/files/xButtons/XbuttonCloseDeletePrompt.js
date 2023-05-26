import React from "react";

function XbuttonCloseDeletePrompt({ setShowDeletePrompt }) {
  return (
    <>
      {" "}
      <div
        className="titleCloseBtn"
        onClick={() => {
          setShowDeletePrompt(false);
        }}
      >
        X
      </div>
    </>
  );
}

export default XbuttonCloseDeletePrompt;
