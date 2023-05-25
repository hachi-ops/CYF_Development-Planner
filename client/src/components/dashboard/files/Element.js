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

        <div className="flex-list">
          <div onClick={handleOpenText}>
            <p className="">
              <span>Title: </span>
              {draft.draft_title}
            </p>
          </div>
          <div className="element-buttons">
            <NavigationButtons
              handleShowEdit={handleShowEdit}
              deleteDraft={deleteDraft}
              draft={draft}
              handleToggleSendToMentor={handleToggleSendToMentor}
              setOpenText={setOpenText}
              setShowDeletePrompt={setShowDeletePrompt}
            />
            <button onClick={handleOpenText}>open</button>
          </div>
        </div>

        {openText && (
          <>
            <div className="show-element">
              <div
                className="titleCloseBtn"
                onClick={() => {
                  setOpenText(false);
                }}
              >
                X
              </div>
              <div className="element">
                <div className="element-container">
                  <div className="flex">
                    {" "}
                    <NavigationButtons
                      handleShowEdit={handleShowEdit}
                      deleteDraft={deleteDraft}
                      draft={draft}
                      handleToggleSendToMentor={handleToggleSendToMentor}
                      setOpenText={setOpenText}
                      setShowDeletePrompt={setShowDeletePrompt}
                      handleShowDeletePrompt={handleShowDeletePrompt}
                    />
                    <h2 className="element-title">
                      {`Title: ${draft.draft_title}`}{" "}
                    </h2>
                  </div>

                  <p className="element-text">{draft.draft_text}</p>
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
