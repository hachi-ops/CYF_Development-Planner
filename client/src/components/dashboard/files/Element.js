import React, { useState } from "react";

// components

import MentorsDropdown from "./MentorsDropdown";
import NavigationButtons from "./NavigationButtons";

import Draft from "./Draft";

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
            />

            <button onClick={handleOpenText}>open</button>
          </div>
        </div>
        {openText && (
          <Draft
            draft={draft}
            deleteDraft={deleteDraft}
            setOpenText={setOpenText}
            handleToggleSendToMentor={handleToggleSendToMentor}
            allDrafts={allDrafts}
          />
        )}
      </div>

      {toggleSendToMentor && (
        <MentorsDropdown
          senderUsername={senderUsername}
          draft={draft}
          setToggleSendToMentor={setToggleSendToMentor}
        />
      )}
    </>
  );
}

export default Element;
