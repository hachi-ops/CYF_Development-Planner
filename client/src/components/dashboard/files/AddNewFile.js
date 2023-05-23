import React, { useState, useEffect } from "react";
import SendNewMessage from "../messages/SendNewMessage";

function AddNewFile({ senderUsername, setShowAddNew }) {
  const [receipientId, setReceipientId] = useState("");

  // const onMentorDropdownMenuChange = (e) => {
  //   setReceipientId(e.target.value);
  // };

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
          receipientId={receipientId}
        />
      </div>
    </>
  );
}

export default AddNewFile;
