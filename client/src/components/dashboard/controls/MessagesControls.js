import React, { useState } from "react";
import AllMessages from "../messages/AllMessages";
import UnreadMessages from "../messages/UnreadMessages";
import SentMessages from "../messages/SentMessages";
import ReadMessages from "../messages/ReadMessages";

function MessagesControls({ name }) {
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [showReadMessages, setShowReadMessages] = useState(false);
  const [showUnreadMessages, setShowUnreadMessages] = useState(false);
  const [showSentMessages, setShowSentMessages] = useState(false);
  const [allTextButton, setAllTextButton] = useState("all");
  const [unreadTextButton, setUnreadTextButton] = useState("unread");
  const [readTextButton, setReadTextButton] = useState("read");
  const [sentTextButton, setSentTextButton] = useState("sent");

  const handleShowAllMessages = () => {
    setShowAllMessages(!showAllMessages);
    setAllTextButton((state) => (state === "all" ? "close" : "all"));
    setShowUnreadMessages(false);
    setShowReadMessages(false);
    setShowSentMessages(false);
    setUnreadTextButton("unread");
    setSentTextButton("sent");
  };

  const handleShowUnreadMessages = () => {
    setShowUnreadMessages(!showUnreadMessages);
    setUnreadTextButton((state) => (state === "unread" ? "close" : "unread"));
    setShowAllMessages(false);
    setShowSentMessages(false);
    setShowReadMessages(false);
    setAllTextButton("all");
    setSentTextButton("sent");
    setReadTextButton("read");
  };

  const handleShowReadMessages = () => {
    setShowUnreadMessages(!showUnreadMessages);
    setReadTextButton((state) => (state === "read" ? "close" : "read"));
    setShowAllMessages(false);
    setShowSentMessages(false);
    setShowUnreadMessages(false);
    setAllTextButton("all");
    setSentTextButton("sent");
    setUnreadTextButton("unread");
  };

  const handleShowSentMessages = () => {
    setShowSentMessages(!showSentMessages);
    setShowUnreadMessages(false);
    setShowAllMessages(false);
    setShowReadMessages(false);
    setAllTextButton("all");
    setUnreadTextButton("unread");
    setReadTextButton("read");
    setSentTextButton((state) => (state === "sent" ? "close" : "sent"));
  };

  return (
    <>
      <h2 className="icon-heading">Messages</h2>
      <div className="buttons" data-testid="messages-controls">
        <button onClick={handleShowAllMessages} className="all">
          {allTextButton}
        </button>
        <button onClick={handleShowReadMessages} className="read">
          {readTextButton}
        </button>
        <button onClick={handleShowUnreadMessages} className="unread">
          {unreadTextButton}
        </button>
        <button onClick={handleShowSentMessages} className="sent">
          {sentTextButton}
        </button>
      </div>
      {showAllMessages ? <AllMessages name={name} /> : false}
      <div> {showUnreadMessages ? <UnreadMessages name={name} /> : false}</div>
      <div> {showSentMessages ? <SentMessages /> : false}</div>
      <div>{showReadMessages ? <ReadMessages /> : false}</div>
    </>
  );
}

export default MessagesControls;
