import React, { useState } from "react";

import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import sendIcon from "../../../images/icons8-send-64.png";
import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";

import DeletePrompt from "../prompts/DeletePrompt";
import EditDraft from "./EditDraft";

function NavigationButtons({
  handleToggleSendToMentor,
  draft,
  deleteDraft,
  setDraftsChange,
}) {
  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleDeletePrompt = () => {
    setDeletePrompt(!deletePrompt);
  };

  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <>
      <div className="navigation-buttons">
        <img
          alt="edit"
          src={editIcon3}
          onClick={handleShowEdit}
          className="icon"
        />
        <img
          className="icon"
          alt="delete"
          src={trashIcon}
          onClick={handleDeletePrompt}
        />

        <img
          className="icon"
          alt="send"
          src={sendIcon}
          onClick={handleToggleSendToMentor}
        />
      </div>
      {deletePrompt && (
        <DeletePrompt
          handleDeletePrompt={handleDeletePrompt}
          draft={draft}
          deleteDraft={deleteDraft}
        />
      )}

      {showEdit && (
        <EditDraft
          draft={draft}
          setDraftsChange={setDraftsChange}
          setShowEdit={setShowEdit}
        />
      )}
    </>
  );
}

export default NavigationButtons;
