import React from "react";
// import NavigationButtonsTrashIcon from "./NavigationButtonsTrashIcon";

function SentElement({ draft, handleShowText, trashIcon }) {
  return (
    <>
      <hr />
      <div className="flex-list">
        <div className="">
          <div className="">{draft.message_title}</div>
        </div>
        <div className="flex-list-buttons">
          {/* <NavigationButtonsTrashIcon trashIcon={trashIcon} /> */}
          <button onClick={handleShowText}>open</button>
        </div>
      </div>
    </>
  );
}

export default SentElement;
