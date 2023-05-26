import React, { useState } from "react";

// components
import EditDraft from "./EditDraft";
import MentorsDropdown from "./MentorsDropdown";
import NavigationButtons from "./NavigationButtons";
import DeletePrompt from "./DeletePrompt";

import Draft from "./Draft";

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
          <div className="flex-list-buttons">
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
          <Draft
            draft={draft}
            deleteDraft={deleteDraft}
            handleShowEdit={handleShowEdit}
            setOpenText={setOpenText}
            handleToggleSendToMentor={handleToggleSendToMentor}
            setShowDeletePrompt={setShowDeletePrompt}
            handleShowDeletePrompt={handleShowDeletePrompt}
          />
        )}
      </div>
    </>
  );
}

export default Element;
