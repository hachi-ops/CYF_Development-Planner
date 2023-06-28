import React from "react";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
function DeleteMessageButton({ handleToggleDeleteMessagePrompt }) {
  return (
    <>
      <div>
        {" "}
        <img
          className="icon"
          alt="delete"
          src={trashIcon}
          onClick={handleToggleDeleteMessagePrompt}
        />
      </div>
    </>
  );
}

export default DeleteMessageButton;
