import React, { useState } from "react";
import SaveEditedDraftConfirmation from "../confirmations/SaveEditedDraftConfirmation";
import CloseButton from "../CloseButton";
const EditDraft = ({ draft, setDraftsChange, setShowEdit }) => {
  //editText function

  const editText = async (id) => {
    try {
      const body = { draftTitle, draftText };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      await fetch(`/dashboard/drafts/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      setDraftsChange(true);
      setDraftTitle("");
      setDraftText("");

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [draftText, setDraftText] = useState(draft.draft_text);
  const [draftTitle, setDraftTitle] = useState(draft.draft_title);

  const [editedDraftConfirmation, setEditedDraftConfimation] = useState(false);
  const handleEitedDraftConfirmation = () => {
    setEditedDraftConfimation(!editedDraftConfirmation);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={() => {
            setShowEdit(false);
          }}
        >
          <CloseButton />
        </div>
        <h1>Edit Draft</h1>
        <div className="buttons ">
          <button
            onClick={() => {
              setShowEdit(false);
            }}
          >
            cancel
          </button>
          <button
            type="button"
            onClick={() =>
              handleEitedDraftConfirmation(editText(draft.draft_id))
            }
          >
            save
          </button>
        </div>

        <div
          className="element-container"
          id={`id${draft.draft_id}`}
          onClick={() => setDraftText(draft.draft_text)}
        >
          <input
            className="element-title"
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
          />

          <textarea
            className="element-text"
            type="text"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
          />
        </div>
      </div>
      {editedDraftConfirmation && (
        <SaveEditedDraftConfirmation
          handleEditedDraftConfirmation={handleEitedDraftConfirmation}
        />
      )}
    </>
  );
};

export default EditDraft;
