import React from "react";

function NavigationButtonsTrashIcon({ setShowDeletePrompt, trashIcon }) {
  return (
    <>
      <img
        alt="delete"
        src={trashIcon}
        onClick={() => setShowDeletePrompt(true)}
        className="icon"
      />
    </>
  );
}

export default NavigationButtonsTrashIcon;
