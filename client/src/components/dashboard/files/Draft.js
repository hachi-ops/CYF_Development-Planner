import React from "react";
import XbuttonCloseDraft from "./xButtons/XbuttonCloseDraft";
import NavigationButtons from "./NavigationButtons";

function Draft({
  draft,
  deleteDraft,
  handleShowEdit,
  setOpenText,
  handleShowDeletePrompt,
  handleToggleSendToMentor,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="">
        <XbuttonCloseDraft setOpenText={setOpenText} />
        <h1>{draft.draft_title}</h1>
        <NavigationButtons
          handleShowEdit={handleShowEdit}
          deleteDraft={deleteDraft}
          draft={draft}
          handleToggleSendToMentor={handleToggleSendToMentor}
          setOpenText={setOpenText}
          setShowDeletePrompt={setShowDeletePrompt}
          handleShowDeletePrompt={handleShowDeletePrompt}
        />
        <h2 className="element-title">{`Title: ${draft.draft_title}`} </h2>
        <p className="element-text">{draft.draft_text}</p>
      </div>
    </>
  );
}

export default Draft;
