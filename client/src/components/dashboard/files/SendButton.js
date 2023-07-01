import React, { useState } from "react";
import sendIcon from "../../../images/icons8-send-64.png";
import Dropdown from "../controls/Dropdown";

function SendButton({ draft, senderUsername }) {
  const [toggleSend, setToggleSend] = useState(false);

  const handleToggleSend = () => {
    setToggleSend(!toggleSend);
  };
  return (
    <>
      <img
        className="icon"
        alt="send"
        src={sendIcon}
        onClick={handleToggleSend}
      />

      {toggleSend && (
        <Dropdown
          handleToggleSend={handleToggleSend}
          draft={draft}
          senderUsername={senderUsername}
        />
      )}
    </>
  );
}

export default SendButton;
