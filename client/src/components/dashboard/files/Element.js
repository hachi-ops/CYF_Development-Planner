import React, { useState } from "react";
import EditDraft from "./EditDraft";

import MentorsDropdown from "./MentorsDropdown";
import DeleteConfirmation from "./DeleteConfirmation";
import NavigationButtons from "./NavigationButtons";
import DeletePrompt from "./DeletePrompt";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openText, setOpenText] = useState(false);
  const handleEdit = () => {
    setToggleEdit(true);
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

  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const handleShowDeletePrompt = () => {
    console.log("file deleted");
    setShowDeletePrompt(!showDeletePrompt);
  };

  return (
    <>
      <div>
        {toggleSendToMentor && (
          <MentorsDropdown senderUsername={senderUsername} draft={draft} />
        )}
        {toggleEdit && (
          <EditDraft draft={draft} setDraftsChange={setDraftsChange} />
        )}
        {showDeletePrompt && (
          <DeletePrompt
            setShowDeletePrompt={setShowDeletePrompt}
            draft={draft}
            deleteDraft={deleteDraft}
          />
        )}
        <div>
          <NavigationButtons
            handleEdit={handleEdit}
            deleteDraft={deleteDraft}
            draft={draft}
            handleToggleSendToMentor={handleToggleSendToMentor}
            setOpenText={setOpenText}
            setShowDeletePrompt={setShowDeletePrompt}
          />
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
                <div className="titleCloseBtn">
                  <div
                    onClick={() => {
                      setOpenText(false);
                    }}
                  >
                    X
                  </div>
                </div>
                <NavigationButtons
                  handleEdit={handleEdit}
                  deleteDraft={deleteDraft}
                  draft={draft}
                  handleToggleSendToMentor={handleToggleSendToMentor}
                  setOpenText={setOpenText}
                  setShowDeletePrompt={setShowDeletePrompt}
                  handleShowDeletePrompt={handleShowDeletePrompt}
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

export default Element;
