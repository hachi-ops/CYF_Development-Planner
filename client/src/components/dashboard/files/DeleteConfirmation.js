import React from "react";

function DeleteConfirmation({
  setShowDeleteConfirmation,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="show-element">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setShowDeleteConfirmation(false);
              setShowDeletePrompt(false);
            }}
          >
            X
          </div>
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
