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

  const [currentTab, setCurrentTab] = useState("1");
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

  const boxes = [
    {
      id: 1,
      title: "Files",
      img: filesIcon,
      alt: "files icon",
      h2Style: {
        borderBottom: filesControlButtons ? "2px solid #b55151" : "none",
        transform: filesControlButtons && "scale(1.2)",
      },
      imgStyle: { transform: filesControlButtons && "scale(1.4)" },
      toggle: handleToggleFiles,
    },
    {
      id: 2,
      title: "Messages",
      img: messagesIcon,
      alt: "messages icon",
      h2Style: {
        borderBottom: messagesControlButtons ? "2px solid #b55151" : "none",
        transform: messagesControlButtons && "scale(1.2)",
      },
      imgStyle: { transform: messagesControlButtons && "scale(1.4)" },
      toggle: handleToggleMessages,
    },

    {
      id: 3,
      title: "Account",
      img: accountIcon,
      alt: "account icon",
      h2Style: {
        borderBottom: accountControlButtons ? "2px solid #b55151" : "none",
        transform: accountControlButtons && "scale(1.2)",
      },
      imgStyle: { transform: accountControlButtons && "scale(1.4)" },
      toggle: handleToggleAccount,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <>
      <div className="buttons flex">
        {boxes.map((item) => (
          <div
            key={item.title}
            className="icon-heading flex"
            onClick={item.toggle}
          >
            <h2 style={item.h2Style}>{item.title}</h2>{" "}
            <img
              src={item.img}
              alt="icon"
              style={item.imgStyle}
              className="dashboard-icon"
            />
          </div>
        ))}
        {filesControlButtons && (
          <DraftsControls name={user.username} user={user} />
        )}
        {messagesControlButtons && <MessagesControls name={user.username} />}
        {accountControlButtons && (
          <AccountControls
            user={user}
            handleUpdate={handleUpdate}
            setAccountControlButtons={setAccountControlButtons}
          />
        )}
      </div>
      <div className="container">
        <div className="tabs icon-heading flex">
          {boxes.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.title}
              <img
                src={tab.img}
                alt="icon"
                style={tab.imgStyle}
                className="dashboard-icon"
              />
            </button>
          ))}
        </div>
        <div className="content ">
          {boxes.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p className="title">{tab.title}</p>
                  <img
                    src={tab.img}
                    alt="icon"
                    style={tab.imgStyle}
                    className="dashboard-icon"
                  />
                  <p>{tab.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardNavigation;
