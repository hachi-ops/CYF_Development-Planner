import React, { useState } from "react";

//images
// import filesIcon from "../../../images/Documents-icon-48.png";
import messagesIcon from "../../../images/Harwen-Pleasant-E-mail.128.png";
import accountIcon from "../../../images/icons8-test-account-96.png";

//components
import FilesControls from "./FilesControls";
import MessagesControls from "./MessagesControls";
import AccountControls from "./AccountControls";

// import filesIcon from "../../../images/Rimshotdesign-Nod-Folder-Document-Alt.128.png";
import filesIcon from "../../../images/Rokey-Eicodesign-Folder-with-file.128.png";

function DashboardNavigation({ user, handleUpdate }) {
  const [filesControlButtons, setFilesControlButtons] = useState(false);
  const [messagesControlButtons, setMessagesControlButtons] = useState(false);
  const [accountControlButtons, setAccountControlButtons] = useState(false);
  const [active, setActive] = useState(false);
  const handleToggleFiles = () => {
    setFilesControlButtons(!filesControlButtons);
    setActive(!active);
    setMessagesControlButtons(false);
    setAccountControlButtons(false);
  };

  const handleToggleMessages = () => {
    setMessagesControlButtons(!messagesControlButtons);
    setActive(!active);
    setFilesControlButtons(false);
    setAccountControlButtons(false);
  };

  const handleToggleAccount = () => {
    setAccountControlButtons(!accountControlButtons);
    setActive(!active);
    setFilesControlButtons(false);
    setMessagesControlButtons(false);
  };

  return (
    <>
      <div className="dashboard-navigation" data-testid="dashboard-navigation">
        <div className="icon-heading" onClick={handleToggleFiles}>
          <h2
            style={{
              borderBottom: filesControlButtons ? "3px solid #b55151" : "none",
            }}
          >
            Files
          </h2>
          <img
            src={filesIcon}
            alt="files icon"
            className="dashboard-icon"
            style={{ transform: filesControlButtons ? "scale(1.5)" : false }}
          />
        </div>

        <div className="icon-heading" onClick={handleToggleMessages}>
          <h2
            style={{
              borderBottom: messagesControlButtons
                ? "3px solid #b55151"
                : "none",
            }}
          >
            Messages
          </h2>
          <img
            src={messagesIcon}
            alt="messages icon"
            className="dashboard-icon"
            style={{ transform: messagesControlButtons ? "scale(1.5)" : false }}
          />
        </div>

        <div className="icon-heading" onClick={handleToggleAccount}>
          <h2
            style={{
              borderBottom: accountControlButtons
                ? "3px solid #b55151"
                : "none",
            }}
          >
            Account
          </h2>
          <img
            src={accountIcon}
            alt="account icon"
            className="dashboard-icon"
            style={{ transform: accountControlButtons ? "scale(1.5)" : false }}
          />
        </div>
      </div>

      {filesControlButtons && <FilesControls name={user.username} />}

      {messagesControlButtons && <MessagesControls name={user.username} />}

      {accountControlButtons && (
        <AccountControls user={user} handleUpdate={handleUpdate} />
      )}
    </>
  );
}

export default DashboardNavigation;
