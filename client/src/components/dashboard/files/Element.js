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
  const [toggleSend, setToggleSend] = useState(false);
  const [openText, setOpenText] = useState(false);

  const handleToggleSend = () => {
    setToggleSend(true);
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
              handleToggleSend={handleToggleSend}
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
          handleToggleSend={handleToggleSend}
          allDrafts={allDrafts}
          handleDeletePrompt={handleDeletePrompt}
          handleShowEdit={handleShowEdit}
        />
      )}
      {toggleSend && (
        <MentorsDropdown
          senderUsername={senderUsername}
          draft={draft}
          setToggleSend={setToggleSend}
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
