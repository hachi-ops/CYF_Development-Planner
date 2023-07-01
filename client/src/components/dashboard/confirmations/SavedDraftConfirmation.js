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
          id="cancelBtn"
        >
          OK
        </button>
        <p>file saved</p>
      </div>
    </>
  );
}

export default SavedDraftConfirmation;
