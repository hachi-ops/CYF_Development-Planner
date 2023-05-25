import React from "react";

function SavedDraftConfirmation({ setOpenSaveDraftModal }) {
  return (
    <>
      <div className="save-confirmation-modal">
        <div className="modalBackground">
          <div className="modalContainer">
            <p>file saved</p>

            <button
              onClick={() => {
                setOpenSaveDraftModal(false);
              }}
              id="cancelBtn"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedDraftConfirmation;
