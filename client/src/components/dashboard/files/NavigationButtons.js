import React, { useState } from "react";

import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import sendIcon from "../../../images/icons8-send-64.png";
import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";

import DeletePrompt from "../prompts/DeletePrompt";

function NavigationButtons({
  handleShowEdit,
  handleToggleSendToMentor,
  draft,
  deleteDraft,
}) {
  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleDeletePrompt = () => {
    setDeletePrompt(!deletePrompt);
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
    </>
  );
}

export default NavigationButtons;
