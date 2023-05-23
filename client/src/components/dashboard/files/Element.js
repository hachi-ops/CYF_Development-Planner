import React, { useState } from "react";
import EditDraft from "./EditDraft";

import MentorsDropdown from "./MentorsDropdown";

function Element({ draft, deleteDraft, setDraftsChange, senderUsername }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendToMentor, setToggleSendToMentor] = useState(false);
  const [openText, setOpenText] = useState(false);
  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleToggleSendToMentor = () => {
    setToggleSendToMentor(!toggleSendToMentor);
  };

  const handleOpenText = () => {
    setOpenText(true);
  };

  // const [cancelBtn, setCancelBtn] = useState("cancel");
  // const cancel = () => {
  //   setCancelBtn();
  // };

  const handleToggleEdit = () => {
    setToggleEdit(true);
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
          <MentorsDropdown senderUsername={senderUsername} draft={draft} />
        )}
        {toggleEdit && (
          <EditDraft draft={draft} setDraftsChange={setDraftsChange} />
        )}
        {showDeletePrompt && (
          <DeletePrompt
            setShowDeletePrompt={setShowDeletePrompt}
            draft={draft}
            deleteDraft={deleteDraft}
          />
        )}
        <div>
          <NavigationButtons
            handleEdit={handleEdit}
            deleteDraft={deleteDraft}
            draft={draft}
            handleToggleSendToMentor={handleToggleSendToMentor}
            setOpenText={setOpenText}
            setShowDeletePrompt={setShowDeletePrompt}
          />
          <div className="flex ">
            <div className="flex element-heading">
              <div onClick={handleOpenText}>
                <p>{draft.draft_title}</p>
              </div>
            </div>
            {/* <button onClick={cancel}>{cancelBtn}</button> */}
            <button onClick={handleOpenText}>open</button>
          </div>

          {openText && (
            <>
              <div className="details show-element">
                <div className="titleCloseBtn">
                  <div
                    onClick={() => {
                      setOpenText(false);
                    }}
                  >
                    X
                  </div>
                </div>
                <NavigationButtons
                  handleEdit={handleEdit}
                  deleteDraft={deleteDraft}
                  draft={draft}
                  handleToggleSendToMentor={handleToggleSendToMentor}
                  setOpenText={setOpenText}
                  setShowDeletePrompt={setShowDeletePrompt}
                  handleShowDeletePrompt={handleShowDeletePrompt}
                />
                <div>{draft.draft_text}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function DeletePrompt({ setShowDeletePrompt, draft, deleteDraft }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleSetShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
    deleteDraft(draft.draft_id);
  };
  return (
    <>
      <div className="show-element">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setShowDeletePrompt(false);
            }}
          >
            X
          </div>
        </div>
        <div>do you want to delete this file?</div>
        <button onClick={() => setShowDeletePrompt(false)}>no</button>
        {/* <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button> */}
        <button onClick={handleSetShowDeleteConfirmation}>yes</button>
        {showDeleteConfirmation && (
          <DeleteConfirmation
            setShowDeleteConfirmation={setShowDeleteConfirmation}
            setShowDeletePrompt={setShowDeletePrompt}
          />
        )}
      </div>
    </>
  );
}
function NavigationButtons({
  handleEdit,
  deleteDraft,
  draft,
  handleToggleSendToMentor,
  setShowDeletePrompt,
  handleShowDeletePrompt,
}) {
  return (
    <>
      <div className="buttons">
        <div className="buttons">
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => setShowDeletePrompt(true)}>delete</button>

          <button onClick={handleToggleSendToMentor}>send</button>
        </div>
      </div>
    </>
  );
}

function DeleteConfirmation({
  setShowDeleteConfirmation,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="show-element">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setShowDeleteConfirmation(false);
              setShowDeletePrompt(false);
            }}
          >
            X
          </div>
        </div>
        <div>file deleted</div>
        <button
          onClick={() => {
            setShowDeleteConfirmation(false);
            setShowDeletePrompt(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}
export default Element;
