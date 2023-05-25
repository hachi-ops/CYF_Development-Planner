import React from "react";

function NavigationButtons({
  handleShowEdit,
  handleToggleSendToMentor,
  setShowDeletePrompt,
}) {
  return (
    <>
      <div className="buttons">
        <button onClick={handleShowEdit}>edit</button>
        <button onClick={() => setShowDeletePrompt(true)}>delete</button>
        <button onClick={handleToggleSendToMentor}>send</button>
      </div>
    </>
  );
}

export default NavigationButtons;
