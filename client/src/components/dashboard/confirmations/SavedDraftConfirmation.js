import React from "react";

function SavedDraftConfirmation({ setOpenSaveDraftModal }) {
  return (
    <>
      <div className="relative">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setOpenSaveDraftModal(false);
          }}
        >
          X
        </div>
        <button
          onClick={() => {
            setOpenSaveDraftModal(false);
          }}
        >
          OK
        </button>
        <p>file saved</p>
      </div>
    </>
  );
}

export default SavedDraftConfirmation;
