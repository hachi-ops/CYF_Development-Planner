import React from "react";

import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";
import DeleteButton from "./DeleteButton";
import SendButton from "./SendButton";

function NavigationButtons({
  handleToggleSend,
  handleShowEdit,
  handleDeletePrompt,
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
        <DeleteButton handleDeletePrompt={handleDeletePrompt} />
        <SendButton handleToggleSend={handleToggleSend} />
      </div>
    </>
  );
}

export default NavigationButtons;
