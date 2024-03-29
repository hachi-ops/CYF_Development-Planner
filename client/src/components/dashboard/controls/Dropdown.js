import React, { useState, useEffect } from "react";
import SentConfirmation from "../confirmations/SentConfirmation";

function Dropdown({
  senderUsername,
  draft,
  setToggleSend,
  handleToggleSend,
  user,
}) {
  const msgTitle = draft.draft_title;
  const msgText = draft.draft_text;

  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");
  const [mentorsList, setMentorsList] = useState([]);

  const [receipientId, setReceipientId] = useState("");

  const getMentors = async () => {
    try {
      const res = await fetch("/dashboard/mentors", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();

      setMentorsList(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  const [studentsList, setStudentsList] = useState([]);
  const getStudents = async () => {
    try {
      const res = await fetch("/dashboard/students", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();

      setStudentsList(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const onStudentsDropdownMenuChange = (e) => {
    setReceipientId(e.target.value);
  };
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

      await response.json();

      setMessageTitle(msgTitle);

      setMessageText(msgText);

      // setConfirmation("file sent");
      // setDraftsChange(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const [sentConfirmation, setSentConfirmation] = useState(false);
  const onClickSend = () => {
    setMessageTitle(msgTitle);
    setMessageText(msgText);
    setSentConfirmation(true);
  };

  const userRole = user.user_role;

  return (
    <>
      <div className="relative">
        <div className="titleCloseBtn" onClick={handleToggleSend}>
          X
        </div>
        <h1>Send File</h1>
        <form onSubmit={onSubmit} className="dropdown">
          {sentConfirmation && (
            <div className="show-element">
              <h1>Send File</h1>
              <div className="titleCloseBtn">
                <div
                  onClick={() => {
                    setSentConfirmation(true);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          )}
          {userRole === "student" ? (
            <select onChange={onMentorDropdownMenuChange}>
              <option>--select mentor--</option>
              {mentorsList.map((mentor) => (
                <option value={mentor.user_id} key={mentor.mentor_id}>
                  {mentor.username}
                </option>
              ))}
            </select>
          ) : (
            <select onChange={onStudentsDropdownMenuChange}>
              <option>--select student--</option>
              {studentsList.map((student) => (
                <option value={student.user_id} key={student.student_id}>
                  {student.username}
                </option>
              ))}
            </select>
          )}

          <div className="buttons">
            <button onClick={onClickSend}>send</button>
            <button onClick={handleToggleSend}>cancel</button>
          </div>
        </form>

        {sentConfirmation && (
          <SentConfirmation
            setSentConfirmation={setSentConfirmation}
            setToggleSend={setToggleSend}
          />
        )}
      </div>
    </>
  );
}

export default Dropdown;
