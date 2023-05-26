import React from "react";

function XbuttonCloseAddNew({ setShowAddNew }) {
  return (
    <div
      className="titleCloseBtn"
      onClick={() => {
        setShowAddNew(false);
      }}
    >
      X
    </div>
  );
}

export default XbuttonCloseAddNew;
