import React, { useState } from "react";

// components
import ListFiles from "../files/ListFiles";
import SentFiles from "../files/SentFiles";
import AddNewFile from "../files/AddNewFile";
import AllMessages from "../messages/AllMessages";
import ReceivedMessages from "../messages/ReceivedMessages";

function FilesControls({ name }) {
  const [showDrafts, setShowDrafts] = useState(false);
  const handleShowDrafts = () => {
    setShowDrafts(true);
  };

  const [showSent, setShowSent] = useState(false);
  const handleShowSent = () => {
    setShowSent(true);
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const handleShowAddNew = () => {
    setShowAddNew(true);
  };

  const [showAllFiles, setShowAllFiles] = useState(false);

  const handleShowAllFiles = () => {
    setShowAllFiles(true);
  };

  const [showReceivedMessages, setShowReceivedMessages] = useState(false);

  const handleShowReceivedMessages = () => {
    setShowReceivedMessages(!showReceivedMessages);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={handleShowAllFiles}>all</button>
        <button onClick={handleShowSent}>sent</button>
        <button onClick={handleShowReceivedMessages}>received</button>
        <button onClick={handleShowDrafts}>drafts</button>
        <button onClick={handleShowAddNew}>new</button>
      </div>
      {showDrafts && (
        <ListFiles senderUsername={name} setShowDrafts={setShowDrafts} />
      )}
      {showSent && <SentFiles setShowSent={setShowSent} />}
      {showAddNew && (
        <AddNewFile senderUsername={name} setShowAddNew={setShowAddNew} />
      )}
      {showAllFiles && (
        <AllMessages name={name} setShowAllMessages={setShowAllFiles} />
      )}
      {showReceivedMessages && (
        <ReceivedMessages
          name={name}
          handleShowReceivedMessages={handleShowReceivedMessages}
        />
      )}
    </>
  );
}

export default FilesControls;
