import React, { useState } from "react";

import NavigationButtons from "./NavigationButtons";

import EditDraft from "./EditDraft";

function Draft({
  draft,
  deleteDraft,

  setOpenText,
  setDraftsChange,

  handleDeletePrompt,
}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <>
      <div className="relative">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setOpenText(false);
          }}
        >
          X
        </div>
        <h1>{draft.draft_title}</h1>
        <NavigationButtons
          handleShowEdit={handleShowEdit}
          deleteDraft={deleteDraft}
          draft={draft}
          setOpenText={setOpenText}
          setDraftsChange={setDraftsChange}
          handleDeletePrompt={handleDeletePrompt}
        />

        <h2 className="element-title">{`Title: ${draft.draft_title}`} </h2>
        <p className="element-text">{draft.draft_text}</p>
      </div>

      {showEdit && (
        <EditDraft
          draft={draft}
          setDraftsChange={setDraftsChange}
          setShowEdit={setShowEdit}
          handleShowEdit={handleShowEdit}
        />
      )}
    </>
  );
}

export default Draft;
