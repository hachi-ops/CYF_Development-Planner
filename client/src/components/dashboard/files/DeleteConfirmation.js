import React from "react";
import XbuttonCloseDeleteConfirmation from "./xButtons/XbuttonCloseDeleteConfirmation";

function DeleteConfirmation({
  setShowDeleteConfirmation,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="show-element">
        <XbuttonCloseDeleteConfirmation
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          setShowDeletePrompt={setShowDeletePrompt}
        />
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
