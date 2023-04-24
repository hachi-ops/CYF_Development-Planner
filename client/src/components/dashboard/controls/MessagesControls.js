import React, { useState } from "react";
import AllMessages from "../messages/AllMessages";

import SentMessages from "../messages/SentMessages";

function MessagesControls({ name }) {
  const [showAllMessages, setShowAllMessages] = useState(false);

  const [showSentMessages, setShowSentMessages] = useState(false);
  const [allTextButton, setAllTextButton] = useState("all");

  const [sentTextButton, setSentTextButton] = useState("sent");

  const handleShowAllMessages = () => {
    setShowAllMessages(!showAllMessages);
    setAllTextButton((state) => (state === "all" ? "close" : "all"));
    setShowSentMessages(false);
  };

  const handleShowSentMessages = () => {
    setShowSentMessages(!showSentMessages);

    setAllTextButton("all");

    setSentTextButton((state) => (state === "sent" ? "close" : "sent"));
  };

  return (
    <>
      <h2 className="icon-heading">Messages</h2>
      <div className="buttons" data-testid="messages-controls">
        <button onClick={handleShowAllMessages} className="all">
          {allTextButton}
        </button>

        <button onClick={handleShowSentMessages} className="sent">
          {sentTextButton}
        </button>
      </div>
      {showAllMessages && <AllMessages name={name} />}

      {showSentMessages && <SentMessages />}
    </>
  );
}

export default MessagesControls;
