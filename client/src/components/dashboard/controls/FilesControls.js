import React, { useState } from "react";

// components
import ListFiles from "../files/ListFiles";
import SentFiles from "../files/SentFiles";
import AddNewFile from "../files/AddNewFile";

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
