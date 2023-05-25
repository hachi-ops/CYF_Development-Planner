import React, { useState } from "react";

function CloseButton() {
  const [showElement, setShowElement] = useState(false);

  const handleShowElement = () => {
    setShowElement(false);
  };
  return (
    <>
      <div className="titleCloseBtn" onClick={handleShowElement}>
        X
      </div>
    </>
  );
}

export default CloseButton;
