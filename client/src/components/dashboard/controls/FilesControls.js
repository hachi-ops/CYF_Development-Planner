import React, { useState } from "react";

// components
import ListFiles from "../drafts/ListFiles";
import SentFiles from "../drafts/SentFiles";
import AddNewFile from "../drafts/AddNewFile";

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

  return (
    <>
      <div className="buttons">
        <button onClick={handleShowDrafts}>drafts</button>
        <button onClick={handleShowSent}>sent</button>
        <button onClick={handleShowAddNew}>new</button>
      </div>
      {showDrafts && (
        <ListFiles senderUsername={name} setShowDrafts={setShowDrafts} />
      )}
      {showSent && <SentFiles setShowSent={setShowSent} />}
      {showAddNew && (
        <AddNewFile senderUsername={name} setShowAddNew={setShowAddNew} />
      )}
    </>
  );
}

export default FilesControls;
