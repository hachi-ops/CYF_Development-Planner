import React from "react";
import CloseButton from "../CloseButton";

function DeleteConfirmation({ handleDeleteConfirmation }) {
  return (
    <>
      <div className="relative prompt">
        <div onClick={handleDeleteConfirmation}>
          <CloseButton handleDeleteConfirmation={handleDeleteConfirmation} />
        </div>
        <div>file deleted</div>
        <button onClick={handleDeleteConfirmation}>OK</button>
      </div>
    </>
  );
}

export default DeleteConfirmation;
