import React from "react";
import messageIcon from "../images/message-icon-72.png";
import fileIcon from "../images/file-icon.png";
import { Link } from "react-router-dom";

function MentorDash() {
  return (
    <>
      <h1>Mentor dashboard</h1>
      <h2>Inbox</h2>
      <Link to="/inbox">
        <img src={messageIcon} alt="message" />
      </Link>

      <h2>Feedbacks</h2>
      <Link to="/feedbacks">
        <img src={fileIcon} alt="file" />
      </Link>
    </>
  );
}

export default MentorDash;
