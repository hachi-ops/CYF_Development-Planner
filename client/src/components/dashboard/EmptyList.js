import React from "react";

import hungryCat from "../../images/Iconka-Meow-2-Cat-hungry.256.png";

function EmptyList() {
  return (
    <>
      <div className="empty-list">
        <img src={hungryCat} alt="sad cat looking at the empty food bowl" />
        <p>nothing to see here</p>
      </div>
    </>
  );
}

export default EmptyList;
