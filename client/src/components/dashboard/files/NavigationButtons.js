import React from "react";

function NavigationButtons({
  handleEdit,
  handleToggleSendToMentor,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="buttons">
        <div className="buttons">
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => setShowDeletePrompt(true)}>delete</button>
          <button onClick={handleToggleSendToMentor}>send</button>
        </div>
      </div>
    </>
  );
}

export default NavigationButtons;
