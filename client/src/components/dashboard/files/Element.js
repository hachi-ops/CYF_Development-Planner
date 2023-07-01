import React, { useState } from "react";

// components

import Draft from "./Draft";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [toggleOpenDraft, setToggleOpenDraft] = useState(false);

  const handleToggleOpenDraftButton = () => {
    setToggleOpenDraft(!toggleOpenDraft);
  };

  return (
    <>
      <div className="flex-list">
        <div
          onClick={handleToggleOpenDraftButton}
          className="flex-list-buttons "
        >
          <p>
            <span>Title: </span>
            {draft.draft_title}
          </p>
        </div>
        <button onClick={handleToggleOpenDraftButton}>open</button>
      </div>
      {toggleOpenDraft && (
        <Draft
          draft={draft}
          deleteDraft={deleteDraft}
          setDraftsChange={setDraftsChange}
          senderUsername={senderUsername}
          handleToggleOpenDraftButton={handleToggleOpenDraftButton}
        />
      )}
    </>
  );
}

export default Element;
