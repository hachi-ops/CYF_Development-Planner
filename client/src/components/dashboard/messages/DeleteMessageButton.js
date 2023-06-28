import React from "react";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
function DeleteMessageButton({
  handleToggleDeleteMessagePrompt,
  removeElement,
}) {
  return (
    <>
      <div>
        {" "}
        <img
          className="icon"
          alt="delete"
          src={trashIcon}
          // onClick={handleToggleDeleteMessagePrompt}
          onClick={removeElement}
        />
      </div>
    </>
  );
}

export default DeleteMessageButton;
