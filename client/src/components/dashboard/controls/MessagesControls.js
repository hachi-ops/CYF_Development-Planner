import React, { useState } from "react";
import AllMessages from "../messages/AllMessages";
import SentMessages from "../messages/SentMessages";
import ReceivedMessages from "../messages/ReceivedMessages";

function MessagesControls({ name }) {
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [showSentMessages, setShowSentMessages] = useState(false);
  const [showReceivedMessages, setShowReceivedMessages] = useState(false);

  const handleShowAllMessages = () => {
    setShowAllMessages(true);
  };

  const handleShowSentMessages = () => {
    setShowSentMessages(true);
  };

  const handleShowReceivedMessages = () => {
    setShowReceivedMessages(true);
  };
  return (
    <>
      <div className="buttons" data-testid="messages-controls">
        <button onClick={handleShowAllMessages}>all</button>

        <button onClick={handleShowSentMessages}>sent</button>
        <button onClick={handleShowReceivedMessages}>received</button>
      </div>
      {showAllMessages && (
        <AllMessages name={name} setShowAllMessages={setShowAllMessages} />
      )}

      {showSentMessages && (
        <SentMessages setShowSentMessages={setShowSentMessages} />
      )}

      {showReceivedMessages && (
        <ReceivedMessages setShowReceivedMessages={setShowReceivedMessages} />
      )}
    </>
  );
}

export default MessagesControls;
