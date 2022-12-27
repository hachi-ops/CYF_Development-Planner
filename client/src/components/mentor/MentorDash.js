import React from "react";
import messageIcon from "../../images/message-icon-72.png";
import fileIcon from "../../images/file-icon.png";
import { Link } from "react-router-dom";

function MentorDash() {
  return (
    <>
      <h1>Mentor dashboard</h1>
      <nav className="dash-nav">
        <Link to="/inbox">
          <h2>Inbox</h2>
          <img src={messageIcon} alt="message" />
        </Link>

        <Link to="/feedbacks">
          <h2>Feedbacks</h2>
          <img src={fileIcon} alt="file" />
        </Link>
      </nav>
    </>
  );
}

export default MentorDash;
