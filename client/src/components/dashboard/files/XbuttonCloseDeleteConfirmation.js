import React from "react";

function XbuttonCloseDeleteConfirmation({
  setShowDeleteConfirmation,
  setShowDeletePrompt,
}) {
  return (
    <>
      {" "}
      <div
        className="titleCloseBtn"
        onClick={() => {
          setShowDeleteConfirmation(false);
          setShowDeletePrompt(false);
        }}
      >
        X
      </div>
    </>
  );
}

export default XbuttonCloseDeleteConfirmation;
