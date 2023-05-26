import React from "react";

import editIcon from "../../../images/Brainleaf-Free-Pencil-Pencil-red.64.png";
import editIcon2 from "../../../images/Saki-NuoveXT-Actions-pencil.64.png";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import sendIcon from "../../../images/icons8-send-64.png";
import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";
import NavigationButtonsTrashIcon from "./NavigationButtonsTrashIcon";

function NavigationButtons({
  handleShowEdit,
  handleToggleSendToMentor,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="navigation-buttons">
        <img
          alt="edit"
          src={editIcon3}
          onClick={handleShowEdit}
          className="icon"
        />

        <NavigationButtonsTrashIcon
          setShowDeletePrompt={setShowDeletePrompt}
          trashIcon={trashIcon}
        />

        <img
          className="icon"
          alt="send"
          src={sendIcon}
          onClick={handleToggleSendToMentor}
        />
      </div>
    </>
  );
}

export default NavigationButtons;
