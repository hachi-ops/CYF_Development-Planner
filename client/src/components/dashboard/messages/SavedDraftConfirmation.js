import React from "react";

function SavedDraftConfirmation({ setOpenSaveDraftModal }) {
  return (
    <>
      <div className="save-confirmation-modal">
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
