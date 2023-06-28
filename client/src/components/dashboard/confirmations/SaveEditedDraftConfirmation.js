import React from "react";
import CloseButton from "../CloseButton";

function SaveEditedDraftConfirmation({ handleEditedDraftConfirmation }) {
  return (
    <>
      <div className="relative">
        <div onClick={handleEditedDraftConfirmation}>
          <CloseButton />
        </div>
        <div>edited draft saved</div>
        <div>OK</div>
      </div>
    </>
  );
}

export default SaveEditedDraftConfirmation;
