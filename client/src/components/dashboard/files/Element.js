import React, { useState } from "react";

// components

import Draft from "./Draft";
import OpenDraftButton from "../controls/OpenDraftButton";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [toggleOpenDraft, setToggleOpenDraft] = useState(false);

  const handleToggleOpenDraftButton = () => {
    setToggleOpenDraft(!toggleOpenDraft);
  };

  return (
    <>
      <div className="flex-list ">
        <div onClick={handleToggleOpenDraftButton}>
          <p className="">
            <span>Title: </span>
            {draft.draft_title}
          </p>
        </div>

        <OpenDraftButton
          handleToggleOpenDraftButton={handleToggleOpenDraftButton}
        />
      </div>
      {toggleOpenDraft && (
        <Draft
          draft={draft}
          deleteDraft={deleteDraft}
          handleToggleOpenDraftButton={handleToggleOpenDraftButton}
          setDraftsChange={setDraftsChange}
          senderUsername={senderUsername}
        />
      )}
    </>
  );
}

export default Element;
