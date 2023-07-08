import React from "react";

function EditedDraftConfirmation({ handleEditedDraftConfirmation }) {
  return (
    <>
      <div className="relative prompt">
        <div className="titleCloseBtn" onClick={handleEditedDraftConfirmation}>
          X
        </div>

        <p>file saved</p>

        <button onClick={handleEditedDraftConfirmation}>OK</button>
      </div>
    </>
  );
}

export default EditedDraftConfirmation;
