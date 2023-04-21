import React, { useState } from "react";
import EditDraft from "./EditDraft";

import MentorsDropdown from "./MentorsDropdown";

function Element({
  draft,
  deleteDraft,
  setDraftsChange,
  senderUsername,
  allDrafts,
}) {
  // console.log(allDrafts);
  // console.log(draft);
  // console.log(senderUsername);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);

  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(!toggleSendToMentor);
  };

  return (
    <>
      <div
        data-testid="element"
        className="buttons"
        key={`elem-${draft.draft_id}`}
      >
        <button onClick={handleEdit}>edit</button>
        <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button>
        <button onClick={handleToggleSendToMentor}>send</button>
      </div>

      {toggleSendToMentor && (
        <MentorsDropdown senderUsername={senderUsername} draft={draft} />
      )}

      {toggleEdit && (
        <EditDraft draft={draft} setDraftsChange={setDraftsChange} />
      )}
      <>{draft.draft_text}</>
    </>
  );
}

export default Element;
