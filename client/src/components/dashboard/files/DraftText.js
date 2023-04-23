import React, { useState } from "react";
import EditDraft from "./EditDraft";
import MentorsDropdown from "./MentorsDropdown";

function DraftText({
  draft,
  deleteDraft,
  allDrafts,
  setDraftsChange,
  senderUsername,
}) {
  const [openDraft, setOpenDraft] = useState(false);

  const handleOpenDraft = () => {
    setOpenDraft(!openDraft);
  };
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(!toggleSendToMentor);
  };
  return (
    <>
      {toggleSendToMentor && (
        <MentorsDropdown senderUsername={senderUsername} draft={draft} />
      )}
      <div className="flex">
        <div className="flex">
          <div>Title</div>
          <div onClick={handleOpenDraft}> {draft.draft_title}</div>
        </div>{" "}
        <button onClick={handleOpenDraft}>open</button>
      </div>
      {toggleEdit && (
        <EditDraft draft={draft} setDraftsChange={setDraftsChange} />
      )}
      {openDraft && (
        <>
          {" "}
          <div className="buttons">
            <button onClick={handleEdit}>edit</button>
            <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button>
            <button onClick={handleToggleSendToMentor}>send</button>
          </div>
          <div>
            <h2 className="icon-heading">Text</h2>
            <br /> {draft.draft_text}
          </div>
        </>
      )}
      <hr />
    </>
  );
}

export default DraftText;
