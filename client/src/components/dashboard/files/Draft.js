import React from "react";

import NavigationButtons from "./NavigationButtons";

function Draft({
  draft,
  deleteDraft,
  handleShowEdit,
  setOpenText,
  setDraftsChange,
  handleToggleSendToMentor,
  handleDeletePrompt,
}) {
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
          handleToggleSendToMentor={handleToggleSendToMentor}
          setOpenText={setOpenText}
          setDraftsChange={setDraftsChange}
          handleDeletePrompt={handleDeletePrompt}
        />

        <h2 className="element-title">{`Title: ${draft.draft_title}`} </h2>
        <p className="element-text">{draft.draft_text}</p>
      </div>
    </>
  );
}

export default Draft;
