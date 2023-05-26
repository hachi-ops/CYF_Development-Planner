import React from "react";

function XbuttonDrafts({ setShowDrafts }) {
  return (
    <div
      className="titleCloseBtn"
      onClick={() => {
        setShowDrafts(false);
      }}
    >
      X
    </div>
  );
}

export default XbuttonDrafts;
