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

  const headingItems = [
    {
      headingText: "Files",
      imgSrc: filesIcon,
      imgAlt: "files icon",
      handleToggle: handleToggleFiles,
      controlButtons: filesControlButtons,
    },
    {
      headingText: "Messages",
      imgSrc: messagesIcon,
      imgAlt: "messages icon",
      handleToggle: handleToggleMessages,
      controlButtons: messagesControlButtons,
    },
    {
      headingText: "Account",
      imgSrc: accountIcon,
      imgAlt: "messages icon",
      handleToggle: handleToggleAccount,
      controlButtons: accountControlButtons,
    },
  ];

  return (
    <>
      <div className="buttons flex" data-testid="dashboard-navigation">
        {headingItems.map((heading) => {
          return <Buttons heading={heading} />;
        })}
        {filesControlButtons && <FilesControls name={user.username} />}
        {messagesControlButtons && <MessagesControls name={user.username} />}
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

function Buttons({ heading }) {
  return (
    <>
      <div className="icon-heading flex" onClick={heading.handleToggle}>
        <h2
          style={{
            borderBottom: heading.controlButtons ? "2px solid #b55151" : "none",
            transform: heading.controlButtons && "scale(1.2)",
          }}
        >
          {heading.headingText}
        </h2>
        <img
          src={heading.imgSrc}
          alt={heading.imgAlt}
          className="dashboard-icon"
          style={{ transform: heading.controlButtons && "scale(1.4)" }}
        />
      </div>
    </>
  );
}
export default DashboardNavigation;
