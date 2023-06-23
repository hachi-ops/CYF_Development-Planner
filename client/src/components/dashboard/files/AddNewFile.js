import React from "react";
import SendNewMessage from "../messages/SendNewMessage";

function AddNewFile({ senderUsername, setShowAddNew }) {
  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowAddNew(false);
          }}
        >
          X
        </div>
        <h1>New Draft</h1>
        <SendNewMessage
          senderUsername={senderUsername}
          setShowAddNew={setShowAddNew}
          // receipientId={receipientId}
        />
      </div>
    </>
  );
}

export default AddNewFile;
