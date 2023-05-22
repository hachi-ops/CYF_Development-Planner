import React, { useState } from "react";
import AllMessages from "../messages/AllMessages";
import SentMessages from "../messages/SentMessages";

function MessagesControls({ name }) {
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [showSentMessages, setShowSentMessages] = useState(false);

  const handleShowAllMessages = () => {
    setShowAllMessages(true);
  };

  const handleShowSentMessages = () => {
    setShowSentMessages(true);
  };

  return (
    <>
      <div className="buttons" data-testid="messages-controls">
        <button onClick={handleShowAllMessages} className="all">
          all
        </button>

        <button onClick={handleShowSentMessages} className="sent">
          sent
        </button>
      </div>
      {showAllMessages && (
        <AllMessages name={name} setShowAllMessages={setShowAllMessages} />
      )}

      {showSentMessages && (
        <SentMessages setShowSentMessages={setShowSentMessages} />
      )}
    </>
  );
}

export default MessagesControls;
