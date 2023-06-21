import React, { useState, useEffect } from "react";
import EmptyList from "../EmptyList";

function ReceivedMessages({
  name,
  setShowReceivedlMessages,
  handleShowReceivedMessages,
}) {
  const [receivedMessages, setReceivedMessages] = useState([]);

  const getReceivedMessages = async () => {
    try {
      const res = await fetch("/dashboard/messages/received", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);
      setReceivedMessages(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getReceivedMessages();
  }, []);
  return (
    <>
      <div className="show-element">
        <div className="titleCloseBtn" onClick={handleShowReceivedMessages}>
          X
        </div>
        <div>
          <h1>Received Messages</h1>
          {receivedMessages.length !== 0 &&
          receivedMessages[0].messageid !== null ? (
            receivedMessages.map((message) => {
              return (
                <>
                  <hr />
                  <div className="flex">
                    <div className="flex">
                      {" "}
                      <h4>{message.sender_username}</h4>
                      <div>{message.message_title}</div>
                    </div>

                    <div className="flex">
                      {" "}
                      <button>open</button>
                      {/* <button>delete</button> */}
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </>
  );
}

export default ReceivedMessages;
