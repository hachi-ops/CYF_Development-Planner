import React, { useState } from "react";

import SavedDraftConfirmation from "../confirmations/SavedDraftConfirmation";

function AddNewFile({ setShowAddNew }) {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  const [openSaveDraftModal, setOpenSaveDraftModal] = useState(false);
  const handleOpenSaveModal = () => {
    setOpenSaveDraftModal(true);
  };

  async function saveMessage() {
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { draftTitle: messageTitle, draftText: messageText };
      const endpoint = "/dashboard/drafts";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      await response.json();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowAddNew(false);
          }}
        >
          X
        </div>
        <form className="add-form">
          <div className="buttons">
            <button
              type="button"
              onClick={() => handleOpenSaveModal(saveMessage(true))}
            >
              save
            </button>
          </div>

          <input
            type="text"
            placeholder="add title"
            value={messageTitle}
            onChange={(e) => setMessageTitle(e.target.value)}
          />
          <textarea
            placeholder="add text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </form>
        {openSaveDraftModal && (
          <SavedDraftConfirmation
            setOpenSaveDraftModal={setOpenSaveDraftModal}
          />
        )}
      </div>
    </>
  );
}

export default AddNewFile;
