import React from "react";

function OpenDraftButton({ handleToggleOpenDraftButton }) {
  return (
    <>
      <div className="flex-list-buttons">
        <button onClick={handleToggleOpenDraftButton}>open</button>
      </div>
    </>
  );
}

export default OpenDraftButton;
