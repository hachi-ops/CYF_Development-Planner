import React, { useState } from "react";

//images
import messagesIcon from "../../../images/Harwen-Pleasant-E-mail.128.png";
import accountIcon from "../../../images/icons8-test-account-96.png";
import filesIcon from "../../../images/Rokey-Eicodesign-Folder-with-file.128.png";

//components
import DraftsControls from "./DraftsControls";
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

  return (
    <>
      <div className="buttons flex" data-testid="dashboard-navigation">
        <div className="icon-heading flex" onClick={handleToggleFiles}>
          <h2
            style={{
              borderBottom: filesControlButtons ? "2px solid #b55151" : "none",
              transform: filesControlButtons && "scale(1.2)",
            }}
          >
            Files
          </h2>
          <img
            src={filesIcon}
            alt="files icon"
            className="dashboard-icon"
            style={{ transform: filesControlButtons && "scale(1.4)" }}
          />
        </div>
        {filesControlButtons && <DraftsControls name={user.username} />}
        <div className="icon-heading flex" onClick={handleToggleMessages}>
          <h2
            style={{
              borderBottom: messagesControlButtons
                ? "2px solid #b55151"
                : "none",
              transform: messagesControlButtons && "scale(1.2)",
            }}
          >
            Messages
          </h2>
          <img
            src={messagesIcon}
            alt="messages icon"
            className="dashboard-icon"
            style={{ transform: messagesControlButtons && "scale(1.4)" }}
          />
        </div>
        {messagesControlButtons && <MessagesControls name={user.username} />}
        <div className="icon-heading flex" onClick={handleToggleAccount}>
          <h2
            style={{
              borderBottom: accountControlButtons
                ? "2px solid #b55151"
                : "none",
              transform: accountControlButtons && "scale(1.2)",
            }}
          >
            Account
          </h2>
          <img
            src={accountIcon}
            alt="account icon"
            className="dashboard-icon"
            style={{ transform: accountControlButtons && "scale(1.4)" }}
          />
        </div>
        {accountControlButtons && (
          <AccountControls
            user={user}
            handleUpdate={handleUpdate}
            setAccountControlButtons={setAccountControlButtons}
          />
        )}
      </div>
    </>
  );
}

export default DashboardNavigation;
