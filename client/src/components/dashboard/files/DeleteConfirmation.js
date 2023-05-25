import React from "react";

function DeleteConfirmation({
  setShowDeleteConfirmation,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="show-element">
        <h1>Draft Deleted</h1>
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowDeleteConfirmation(false);
            setShowDeletePrompt(false);
          }}
        >
          X
        </div>

        <div>file deleted</div>
        <button
          onClick={() => {
            setShowDeleteConfirmation(false);
            setShowDeletePrompt(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default DeleteConfirmation;
