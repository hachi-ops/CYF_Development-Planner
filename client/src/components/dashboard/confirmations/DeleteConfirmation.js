import React from "react";
import CloseButton from "../CloseButton";

function DeleteConfirmation({
  handleDeleteConfirmation,
  setDeleteConfimation,
  handleDeletePrompt,
}) {
  return (
    <>
      <div className="show-element">
        <div onClick={handleDeleteConfirmation}>
          <CloseButton handleDeleteConfirmation={handleDeleteConfirmation} />
        </div>

        <div>file deleted</div>
        <button>OK</button>
      </div>
    </>
  );
}

export default DeleteConfirmation;
