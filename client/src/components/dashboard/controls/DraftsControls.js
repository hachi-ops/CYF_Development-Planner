import React, { useState } from "react";

// components
import DraftsList from "../files/DraftsList";

import AddNewFile from "../files/AddNewFile";
import AddNewDraft from "../files/AddNewDraft";

function DraftsControls({ name, user }) {
  const [showDrafts, setShowDrafts] = useState(false);

  const handleShowDrafts = () => {
    setShowDrafts(true);
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const handleShowAddNew = () => {
    setShowAddNew(true);
  };

  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  const [showAddNewDraft, setShowAddNewDraft] = useState(false);
  const handleShowAddNewDraft = () => {
    setShowAddNewDraft(true);
  };
  return (
    <>
      <div data-testid="drafts-controls">
        <div className="buttons">
          <button onClick={handleShowDrafts}>drafts</button>
          <button onClick={handleShowAddNew}>new</button>
          <button onClick={handleShowAddNewDraft}>new draft</button>
        </div>
        {showDrafts && (
          <DraftsList
            senderUsername={name}
            setShowDrafts={setShowDrafts}
            user={user}
          />
        )}
        {showAddNew && (
          <AddNewFile senderUsername={name} setShowAddNew={setShowAddNew} />
        )}

        {showAddNewDraft && (
          <AddNewDraft
            senderUsername={name}
            setShowAddNewDraft={setShowAddNewDraft}
            tasks={DATA}
          />
        )}
      </div>
    </>
  );
}

export default DraftsControls;
