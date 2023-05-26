import React from "react";

function XbuttonCloseDraft({ setOpenText }) {
  return (
    <div
      className="titleCloseBtn"
      onClick={() => {
        setOpenText(false);
      }}
    >
      X
    </div>
  );
}

export default XbuttonCloseDraft;
