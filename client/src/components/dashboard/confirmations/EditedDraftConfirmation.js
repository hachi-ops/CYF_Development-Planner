import React from "react";

function EditedDraftConfirmation({ handleEditedDraftConfirmation }) {
  return (
    <>
      <div className="relative">
        <div className="titleCloseBtn" onClick={handleEditedDraftConfirmation}>
          X
        </div>
        <button onClick={handleEditedDraftConfirmation} id="cancelBtn">
          OK
        </button>
        <p>file saved</p>
      </div>
    </>
  );
}

export default EditedDraftConfirmation;
