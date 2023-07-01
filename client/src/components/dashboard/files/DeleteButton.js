import React, { useState } from "react";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import DeletePrompt from "../prompts/DeletePrompt";

function DeleteButton({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleDeletePrompt = () => {
    setDeletePrompt(!deletePrompt);
  };
  return (
    <>
      <img
        className="icon"
        alt="delete"
        src={trashIcon}
        onClick={handleDeletePrompt}
      />

      {deletePrompt && (
        <DeletePrompt
          handleDeletePrompt={handleDeletePrompt}
          draft={draft}
          deleteDraft={deleteDraft}
          setDeletePrompt={setDeletePrompt}
          setDraftsChange={setDraftsChange}
        />
      )}
    </>
  );
}

export default DeleteButton;
