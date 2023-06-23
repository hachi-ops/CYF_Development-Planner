import React, { useState } from "react";

// components
import DraftsList from "../files/DraftsList";

import AddNewFile from "../files/AddNewFile";

function FilesControls({ name }) {
  const [showDrafts, setShowDrafts] = useState(false);
  const handleShowDrafts = () => {
    setShowDrafts(true);
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const handleShowAddNew = () => {
    setShowAddNew(true);
  };
  return (
    <>
      <div className="buttons">
        <button onClick={handleShowDrafts}>drafts</button>
        <button onClick={handleShowAddNew}>new</button>
      </div>
      {showDrafts && (
        <DraftsList senderUsername={name} setShowDrafts={setShowDrafts} />
      )}

      {showAddNew && (
        <AddNewFile senderUsername={name} setShowAddNew={setShowAddNew} />
      )}
    </>
  );
}

export default FilesControls;
