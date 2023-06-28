import React from "react";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
function DeleteButton({ handleDeletePrompt }) {
  return (
    <>
      {" "}
      <img
        className="icon"
        alt="delete"
        src={trashIcon}
        onClick={handleDeletePrompt}
      />
    </>
  );
}

export default DeleteButton;
