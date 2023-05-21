import React, { useState } from "react";

//images
import messagesIcon from "../../../images/Harwen-Pleasant-E-mail.128.png";
import accountIcon from "../../../images/icons8-test-account-96.png";
import filesIcon from "../../../images/Rokey-Eicodesign-Folder-with-file.128.png";

//components
import FilesControls from "./FilesControls";
import MessagesControls from "./MessagesControls";
import AccountControls from "./AccountControls";

function DashboardNavigation({ user, handleUpdate }) {
  const [filesControlButtons, setFilesControlButtons] = useState(false);
  const [messagesControlButtons, setMessagesControlButtons] = useState(false);
  const [accountControlButtons, setAccountControlButtons] = useState(false);

  const handleToggleFiles = () => {
    setFilesControlButtons(!filesControlButtons);
    setMessagesControlButtons(false);
    setAccountControlButtons(false);
  };

  const handleToggleMessages = () => {
    setMessagesControlButtons(!messagesControlButtons);
    setFilesControlButtons(false);
    setAccountControlButtons(false);
  };

  const handleToggleAccount = () => {
    setAccountControlButtons(!accountControlButtons);
    setFilesControlButtons(false);
    setMessagesControlButtons(false);
  };

  const [clickThis, setClickThis] = useState("close");

  const handleClick3 = (e) => {
    console.log(e.target.innerText);

    const change = e.target.innerText === "close" ? "clickThis" : "close";
    setClickThis(change);
  };

  return (
    <>
      <div className="buttons" data-testid="dashboard-navigation">
        <div className="icon-heading" onClick={handleToggleFiles}>
          <h2
            style={{
              borderBottom: filesControlButtons ? "3px solid #b55151" : "none",
              transform: filesControlButtons ? "scale(1.2)" : false,
            }}
          >
            Files
          </h2>
          <img
            src={filesIcon}
            alt="files icon"
            className="dashboard-icon"
            style={{ transform: filesControlButtons ? "scale(1.4)" : false }}
          />
        </div>

        <div className="icon-heading" onClick={handleToggleMessages}>
          <h2
            style={{
              borderBottom: messagesControlButtons
                ? "3px solid #b55151"
                : "none",
              transform: messagesControlButtons ? "scale(1.2)" : false,
            }}
          >
            Messages
          </h2>
          <img
            src={messagesIcon}
            alt="messages icon"
            className="dashboard-icon"
            style={{ transform: messagesControlButtons ? "scale(1.4)" : false }}
          />
        </div>

        <div className="icon-heading" onClick={handleToggleAccount}>
          <h2
            style={{
              borderBottom: accountControlButtons
                ? "3px solid #b55151"
                : "none",
              transform: accountControlButtons ? "scale(1.2)" : false,
            }}
          >
            Account
          </h2>
          <img
            src={accountIcon}
            alt="account icon"
            className="dashboard-icon"
            style={{ transform: accountControlButtons ? "scale(1.4)" : false }}
          />
        </div>
      </div>

      {filesControlButtons && <FilesControls name={user.username} />}

      {messagesControlButtons && <MessagesControls name={user.username} />}

      {accountControlButtons && (
        <AccountControls user={user} handleUpdate={handleUpdate} />
      )}
      <button onClick={(e) => handleClick3(e)}>{clickThis}</button>
    </>
  );
}

export default DashboardNavigation;
