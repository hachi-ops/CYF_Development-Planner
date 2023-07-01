import React, { useState } from "react";

import SavedDraftConfirmation from "../confirmations/SavedDraftConfirmation";

function AddNewFile({ senderUsername, setShowAddNew }) {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  const [openSaveDraftModal, setOpenSaveDraftModal] = useState(false);
  const handleOpenSaveModal = () => {
    setOpenSaveDraftModal(true);
  };

  const [receipientId, setReceipientId] = useState("");

  async function sendMessage(isDraft) {
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      let body;
      let endpoint;
      if (isDraft) {
        body = { draftTitle: messageTitle, draftText: messageText };
        endpoint = "/dashboard/drafts";
      } else {
        body = { messageTitle, messageText, receipientId, senderUsername };
        endpoint = "/dashboard/messages";
      }

      // const body = { messageTitle, messageText, receipientId, senderUsername };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="relative">
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
              onClick={() => handleOpenSaveModal(sendMessage(true))}
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
      </div>

      {openSaveDraftModal && (
        <SavedDraftConfirmation setOpenSaveDraftModal={setOpenSaveDraftModal} />
      )}
    </>
  );
}

export default AddNewFile;
