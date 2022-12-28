import React from "react";
import messageIcon from "../../images/message-icon-72.png";
import { Link } from "react-router-dom";

function NavigateToMessages() {
  return (
    <>
      <Link to="/inbox">
        <img src={messageIcon} alt="message" />
      </Link>
    </>
  );
}

export default NavigateToMessages;
