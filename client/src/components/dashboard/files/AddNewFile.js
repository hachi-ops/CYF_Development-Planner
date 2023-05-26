import React from "react";
import SendNewMessage from "../messages/SendNewMessage";
import XbuttonCloseAddNew from "./xButtons/XbuttonCloseAddNew";

function AddNewFile({ senderUsername, setShowAddNew }) {
  return (
    <>
      <div className="show-element">
        <XbuttonCloseAddNew setShowAddNew={setShowAddNew} />
        <h1>New Draft</h1>
        <SendNewMessage
          senderUsername={senderUsername}
          // receipientId={receipientId}
        />
      </div>
    </>
  );
}

export default AddNewFile;
