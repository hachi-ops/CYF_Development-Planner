import React, { useState } from "react";
import EditDraft from "./EditDraft";

import MentorsDropdown from "./MentorsDropdown";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  // console.log(allDrafts);
  // console.log(draft);
  // console.log(senderUsername);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openText, setOpenText] = useState(false);
  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(!toggleSendToMentor);
  };

  const handleOpenText = () => {
    setOpenText(!openText);
  };

  // const [cancelBtn, setCancelBtn] = useState("cancel");
  // const cancel = () => {
  //   setCancelBtn();
  // };

  return (
    <>
      <div>
        {toggleSendToMentor && (
          <MentorsDropdown senderUsername={senderUsername} draft={draft} />
        )}
        {toggleEdit && (
          <EditDraft draft={draft} setDraftsChange={setDraftsChange} />
        )}

        <div>
          <div className="flex">
            <div className="flex">
              <div>Title</div>
              <div onClick={handleOpenText}>{draft.draft_title}</div>
            </div>
            {/* <button onClick={cancel}>{cancelBtn}</button> */}
            <button onClick={handleOpenText}>open</button>
          </div>
        </div>
        {openText && (
          <>
            <div className="details">
              <div className="buttons">
                <div className="buttons">
                  <button onClick={handleEdit}>edit</button>
                  <button onClick={() => deleteDraft(draft.draft_id)}>
                    Delete
                  </button>
                  <button onClick={handleToggleSendToMentor}>send</button>
                </div>
              </div>

              <div>
                <div>
                  {" "}
                  <h2 className="icon-heading">Text</h2>
                  <br /> {draft.draft_text}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Element;
