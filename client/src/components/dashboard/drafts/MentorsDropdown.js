import React, { useState, useEffect } from "react";

function MentorsDropdown({ senderUsername, draft }) {
  // console.log(draft);
  // console.log(draft.draft_title);
  // console.log(draft.draft_text);
  const msgTitle = draft.draft_title;
  const msgText = draft.draft_text;
  console.log(msgText);
  // console.log(msgTitle);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");
  const [list, setList] = useState([]);

  const [receipientId, setReceipientId] = useState("");
  console.log(senderUsername);
  const getMentors = async () => {
    try {
      const res = await fetch("/dashboard/mentors", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);

      setList(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  const onMentorDropdownMenuChange = (e) => {
    setReceipientId(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { receipientId, senderUsername, messageTitle, messageText };
      const response = await fetch("/dashboard/messages", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);
      setMessageTitle(msgTitle);
      // console.log(messageTitle);
      setMessageText(msgText);
      console.log(msgText);
      setConfirmation("file sent");
      // setDraftsChange(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(receipientId);

  const [confirmation, setConfirmation] = useState("");
  const onClickButton = () => {
    setMessageTitle(msgTitle);
    setMessageText(msgText);
    setConfirmation(confirmation);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        {/* <div>{messageTitle}</div>
        <div>{messageText}</div> */}
        <div>{confirmation}</div>
        <select onChange={onMentorDropdownMenuChange}>
          <option>--select mentor--</option>
          {list.map((mentor) => (
            <option value={mentor.user_id} key={mentor.mentor_id}>
              {mentor.username}
            </option>
          ))}
        </select>
        <button onClick={onClickButton}>send it</button>
      </form>
    </>
  );
}

export default MentorsDropdown;
