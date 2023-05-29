import React from "react";
import CloseButton from "../CloseButton";

function SaveEditedDraftConfirmation({ setOpenSaveEditedDraftModal }) {
  return (
    <>
      <div
        className="show-element"
        onClick={() => {
          setOpenSaveEditedDraftModal(false);
        }}
      >
        <CloseButton />
        <div>edited draft saved</div>
      </div>
    </>
  );
}

export default SaveEditedDraftConfirmation;
