import React from "react";

function SavedDraftConfirmation({ setOpenSaveDraftModal }) {
  return (
    <>
      <div className="relative prompt">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setOpenSaveDraftModal(false);
          }}
        >
          X
        </div>

        <p>file saved</p>
        <button
          onClick={() => {
            setOpenSaveDraftModal(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default SavedDraftConfirmation;
