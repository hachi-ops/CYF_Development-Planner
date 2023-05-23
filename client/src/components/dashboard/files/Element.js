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
    setOpenText(true);
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
          <div className="flex ">
            <div className="flex element-heading">
              <div onClick={handleOpenText}>
                <p>{draft.draft_title}</p>
              </div>
            </div>
            {/* <button onClick={cancel}>{cancelBtn}</button> */}
            <button onClick={handleOpenText}>open</button>
          </div>
          {openText && (
            <>
              <div className="details show-element">
                <NavigationButtons
                  handleEdit={handleEdit}
                  deleteDraft={deleteDraft}
                  draft={draft}
                  handleToggleSendToMentor={handleToggleSendToMentor}
                  setOpenText={setOpenText}
                />
                <div>{draft.draft_text}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function NavigationButtons({
  handleEdit,
  deleteDraft,
  draft,
  handleToggleSendToMentor,
  handleCloseElement,
  setOpenText,
}) {
  return (
    <>
      <div className="buttons">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setOpenText(false);
            }}
          >
            X
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button>
          <button onClick={handleToggleSendToMentor}>send</button>
        </div>
      </div>
    </>
  );
}
export default Element;
