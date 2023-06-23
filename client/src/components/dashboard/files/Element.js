import React, { useState } from "react";

// components

import MentorsDropdown from "./MentorsDropdown";
import NavigationButtons from "./NavigationButtons";
import EditDraft from "./EditDraft";
import Draft from "./Draft";
import DeletePrompt from "../prompts/DeletePrompt";

function Element({
  draft,
  deleteDraft,
  setDraftsChange,
  senderUsername,
  allDrafts,
}) {
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openText, setOpenText] = useState(false);

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(true);
  };

  const handleOpenText = () => {
    setOpenText(true);
  };

  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleDeletePrompt = () => {
    setDeletePrompt(!deletePrompt);
  };

  return (
    <>
      <div>
        <div className="flex-list ">
          <div onClick={handleOpenText}>
            <p className="">
              <span>Title: </span>
              {draft.draft_title}
            </p>
          </div>
          <div className="flex-list-buttons">
            <NavigationButtons
              deleteDraft={deleteDraft}
              draft={draft}
              handleToggleSendToMentor={handleToggleSendToMentor}
              setOpenText={setOpenText}
              setDraftsChange={setDraftsChange}
              handleShowEdit={handleShowEdit}
              handleDeletePrompt={handleDeletePrompt}
            />

            <button onClick={handleOpenText}>open</button>
          </div>
        </div>
      </div>
      {openText && (
        <Draft
          draft={draft}
          deleteDraft={deleteDraft}
          setOpenText={setOpenText}
          handleToggleSendToMentor={handleToggleSendToMentor}
          allDrafts={allDrafts}
          handleDeletePrompt={handleDeletePrompt}
          handleShowEdit={handleShowEdit}
        />
      )}
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
          handleShowEdit={handleShowEdit}
        />
      )}
      {deletePrompt && (
        <DeletePrompt
          handleDeletePrompt={handleDeletePrompt}
          draft={draft}
          deleteDraft={deleteDraft}
          setDeletePrompt={setDeletePrompt}
        />
      )}
    </>
  );
}

export default Element;
