import React, { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

function DeletePrompt({ setShowDeletePrompt, draft, deleteDraft }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleSetShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
    deleteDraft(draft.draft_id);
  };
  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowDeletePrompt(false);
          }}
        >
          X
        </div>

        <p className="prompt">do you want to delete this file?</p>
        <div className="buttons">
          <button onClick={handleSetShowDeleteConfirmation}>yes</button>
          <button onClick={() => setShowDeletePrompt(false)}>no</button>
          {/* <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button> */}
        </div>

        {showDeleteConfirmation && (
          <DeleteConfirmation
            setShowDeleteConfirmation={setShowDeleteConfirmation}
            setShowDeletePrompt={setShowDeletePrompt}
          />
        )}
      </div>
    </>
  );
}

export default DeletePrompt;
