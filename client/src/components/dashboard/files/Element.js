import React, { useState } from "react";

// components

import Draft from "./Draft";
import DeletePrompt from "../prompts/DeletePrompt";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [openText, setOpenText] = useState(false);

  const handleOpenText = () => {
    setOpenText(true);
  };

  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleDeletePrompt = () => {
    setDeletePrompt(!deletePrompt);
  };

  return (
    <>
      <div className="flex-list ">
        <div onClick={handleOpenText}>
          <p className="">
            <span>Title: </span>
            {draft.draft_title}
          </p>
        </div>
        <div className="flex-list-buttons">
          <button onClick={handleOpenText}>open</button>
        </div>
      </div>

      {openText && (
        <Draft
          draft={draft}
          deleteDraft={deleteDraft}
          setOpenText={setOpenText}
          handleDeletePrompt={handleDeletePrompt}
          setDraftsChange={setDraftsChange}
        />
      )}

      {deletePrompt && (
        <DeletePrompt
          handleDeletePrompt={handleDeletePrompt}
          draft={draft}
          deleteDraft={deleteDraft}
          setDeletePrompt={setDeletePrompt}
        />
      )}
    </>
  );
}

export default Element;
