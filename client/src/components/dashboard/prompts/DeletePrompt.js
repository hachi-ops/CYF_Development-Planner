import React from "react";
import CloseButton from "../CloseButton";

function DeletePrompt({ handleDeletePrompt, deleteDraft, draft }) {
  return (
    <>
      <div className="show-element">
        <div onClick={handleDeletePrompt}>
          <CloseButton />
        </div>
        <div>Do you want to delete this file????</div>
        <div className="buttons">
          <button onClick={() => deleteDraft(draft.draft_id)}>yes</button>
          <button onClick={handleDeletePrompt}>no</button>
        </div>
      </div>
    </>
  );
}

export default DeletePrompt;
