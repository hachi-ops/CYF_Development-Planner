import React from "react";
import sendIcon from "../../../images/icons8-send-64.png";

function SendButton({ handleToggleSend }) {
  return (
    <>
      <img
        className="icon"
        alt="send"
        src={sendIcon}
        onClick={handleToggleSend}
      />
    </>
  );
}

export default SendButton;
