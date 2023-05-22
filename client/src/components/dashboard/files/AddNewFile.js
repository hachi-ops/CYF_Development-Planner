import React, { useState, useEffect } from "react";
import SendNewMessage from "../messages/SendNewMessage";

function AddNewFile({ senderUsername, setShowAddNew }) {
  const [list, setList] = useState([]);

  const getMentors = async () => {
    try {
      const res = await fetch("/dashboard/mentors", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);

      setList(parseData);

      console.log(parseData.user_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  const [receipientId, setReceipientId] = useState("");

  const onMentorDropdownMenuChange = (e) => {
    setReceipientId(e.target.value);
  };

  return (
    <>
      <div className="list-files">
        <div className="titleCloseBtn">
          <div
            className="titleCloseBtn"
            onClick={() => {
              setShowAddNew(false);
            }}
          >
            X
          </div>
        </div>
        <SelectMentor
          onMentorDropdownMenuChange={onMentorDropdownMenuChange}
          list={list}
        />
        <SendNewMessage
          senderUsername={senderUsername}
          receipientId={receipientId}
        />
      </div>
    </>
  );
}

function SelectMentor({ onMentorDropdownMenuChange, list }) {
  return (
    <>
      <div className="select-dropdown">
        <select onChange={onMentorDropdownMenuChange}>
          <option>--select mentor--</option>
          {list.map((mentor) => (
            <option value={mentor.user_id} key={mentor.mentor_id}>
              {mentor.username}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default AddNewFile;
