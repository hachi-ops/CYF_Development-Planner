import React, { useState } from "react";
import EditDraft from "./EditDraft";

import MentorsDropdown from "./MentorsDropdown";

function Element({
  draft,
  deleteDraft,
  setDraftsChange,
  senderUsername,
  allDrafts,
  setDrafts,
}) {
  // console.log(allDrafts);
  // console.log(draft);
  // console.log(senderUsername);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(!toggleSendToMentor);
  };

  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <>
      {/* <div
        data-testid="element"
        className="buttons"
        key={`elem-${draft.draft_id}`}
      ></div> */}
      <div>
        {toggleSendToMentor && (
          <MentorsDropdown senderUsername={senderUsername} draft={draft} />
        )}
        {toggleEdit && (
          <EditDraft
            draft={draft}
            setDraftsChange={setDraftsChange}
            allDrafts={allDrafts}
          />
        )}
        <div>
          <div className="flex">
            <div className="flex">
              <div>Title</div>
              <div onClick={handleOpenButton}>{draft.draft_title}</div>
            </div>

            <button onClick={handleOpenButton}>open</button>
          </div>
        </div>
        {openButton && (
          <>
            <div className="buttons">
              <button onClick={handleEdit}>edit</button>
              <button onClick={() => deleteDraft(draft.draft_id)}>
                Delete
              </button>
              <button onClick={handleToggleSendToMentor}>send</button>
            </div>
            <div>
              <h2 className="icon-heading">Text</h2>
              <br /> {draft.draft_text}
            </div>
          </>
        )}
      </div>
      <hr />
    </>
  );
}

export default Element;
