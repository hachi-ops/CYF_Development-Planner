import React from "react";
import SendNewMessage from "../messages/SendNewMessage";

function AddNewFile({ senderUsername, setShowAddNew }) {
  return (
    <>
      <div className="list-files">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowAddNew(false);
          }}
        >
          X
        </div>

        <SendNewMessage
          senderUsername={senderUsername}
          // receipientId={receipientId}
        />
      </div>
    </>
  );
}

export default AddNewFile;
