import React from "react";

import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";
import DeleteButton from "./DeleteButton";
import SendButton from "./SendButton";

function NavigationButtons({
  handleToggleSend,
  handleShowEdit,
  user,
  draft,
  senderUsername,
  deleteDraft,
  setDraftsChange,
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
        <DeleteButton
          draft={draft}
          deleteDraft={deleteDraft}
          setDraftsChange={setDraftsChange}
          senderUsername={senderUsername}
        />
        <SendButton
          handleToggleSend={handleToggleSend}
          draft={draft}
          senderUsername={senderUsername}
          user={user}
        />
      </div>
    </>
  );
}

export default NavigationButtons;
