import React, { useState } from "react";

// components
import EditDraft from "./EditDraft";
import MentorsDropdown from "./MentorsDropdown";
import NavigationButtons from "./NavigationButtons";
import DeletePrompt from "./DeletePrompt";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [showEdit, setShowEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openText, setOpenText] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(true);
  };

  const handleOpenText = () => {
    setOpenText(true);
  };

  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const handleShowDeletePrompt = () => {
    console.log("file deleted");
    setShowDeletePrompt(!showDeletePrompt);
  };

  return (
    <>
      <div>
        {toggleSendToMentor && (
          <MentorsDropdown
            senderUsername={senderUsername}
            draft={draft}
            setToggleSendToMentor={setToggleSendToMentor}
          />
        )}
        {showEdit && (
          <EditDraft
            draft={draft}
            setDraftsChange={setDraftsChange}
            setShowEdit={setShowEdit}
          />
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
            handleShowEdit={handleShowEdit}
            deleteDraft={deleteDraft}
            draft={draft}
            handleToggleSendToMentor={handleToggleSendToMentor}
            setOpenText={setOpenText}
            setShowDeletePrompt={setShowDeletePrompt}
          />
          <div className="flex ">
            <div className="flex">
              <div onClick={handleOpenText}>
                <h2>Title</h2>
                <p>{draft.draft_title}</p>
              </div>
            </div>

            <button onClick={handleOpenText}>open</button>
          </div>

          {openText && (
            <>
              <div className="show-element">
                <h2>Title: </h2>
                <div
                  className="titleCloseBtn"
                  onClick={() => {
                    setOpenText(false);
                  }}
                >
                  X
                </div>

                <NavigationButtons
                  handleShowEdit={handleShowEdit}
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
