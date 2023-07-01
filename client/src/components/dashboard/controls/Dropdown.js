import React, { useState, useEffect } from "react";

function Dropdown({ handleToggleSend }) {
  const [mentorsList, setMentorsList] = useState([]);
  const getMentors = async () => {
    try {
      const res = await fetch("/dashboard/mentors", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);

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
      console.log(parseData);

      setStudentsList(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="relative">
      <div onClick={handleToggleSend} className="titleCloseBtn">
        X
      </div>
      <h1>Send File</h1>
      <form className="dropdown">
        <select>
          <option>--select mentor--</option>
          {mentorsList.map((mentor) => (
            <option value={mentor.user_id} key={mentor.mentor_id}>
              {mentor.username}
            </option>
          ))}
        </select>
        <select>
          <option>--select student--</option>
          {studentsList.map((student) => (
            <option value={student.user_id} key={student.student_id}>
              {student.username}
            </option>
          ))}
        </select>
      </form>

      <button>send</button>
      <button>cancel</button>
    </div>
  );
}

export default Dropdown;
