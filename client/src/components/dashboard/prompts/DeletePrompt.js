import React, { useState } from "react";
import CloseButton from "../CloseButton";
import DeleteConfirmation from "../confirmations/DeleteConfirmation";

function DeletePrompt({
  deleteDraft,
  draft,
  handleDeletePrompt,
  setDeletePrompt,
}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };
  return (
    <>
      <div className="relative">
        <div onClick={handleDeletePrompt}>
          <CloseButton setDeleteConfirmation={setDeleteConfirmation} />
        </div>
        <div>Do you want to delete this file????</div>
        <div className="buttons">
          <button
            onClick={() => {
              deleteDraft(draft.draft_id);
              setDeleteConfirmation(true);
            }}
          >
            yes
          </button>
          <button onClick={handleDeletePrompt}>no</button>
        </div>
      </div>
    </>
  );
}

export default DeletePrompt;
