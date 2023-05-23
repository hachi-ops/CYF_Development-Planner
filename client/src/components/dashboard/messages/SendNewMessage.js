import React, { useState, useEffect } from "react";

function SendNewMessage({ senderUsername }) {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // console.log(senderUsername);
  // console.log(receipientId);

  const [openSaveDraftModal, setOpenSaveDraftModal] = useState(false);
  const handleOpenSaveModal = () => {
    setOpenSaveDraftModal(true);
  };

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
  const [showDropdown, setShowDropdown] = useState(false);
  const onMentorDropdownMenuChange = (e) => {
    setReceipientId(e.target.value);
  };
  async function sendMessage(isDraft) {
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      let body;
      let endpoint;
      if (isDraft) {
        body = { draftTitle: messageTitle, draftText: messageText };
        endpoint = "/dashboard/drafts";
      } else {
        body = { messageTitle, messageText, receipientId, senderUsername };
        endpoint = "/dashboard/messages";
      }

      // const body = { messageTitle, messageText, receipientId, senderUsername };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setMessageText("");
      setMessageTitle("");
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };
  return (
    <>
      <form className="add-form">
        <div className="buttons">
          <button type="button" onClick={handleShowDropdown}>
            send
          </button>
          {showDropdown && (
            <SelectMentor
              onMentorDropdownMenuChange={onMentorDropdownMenuChange}
              list={list}
              setShowDropdown={setShowDropdown}
              sendMessage={sendMessage}
            />
          )}
          <button
            type="button"
            onClick={() => handleOpenSaveModal(sendMessage(true))}
          >
            save
          </button>
        </div>

        <input
          type="text"
          placeholder="add title"
          value={messageTitle}
          onChange={(e) => setMessageTitle(e.target.value)}
        />
        <textarea
          placeholder="add text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </form>
      {openSaveDraftModal && (
        <SavedDraftConfirmation setOpenSaveDraftModal={setOpenSaveDraftModal} />
      )}
    </>
  );
}

function SavedDraftConfirmation({ setOpenSaveDraftModal }) {
  return (
    <>
      <div className="save-confirmation-modal">
        <div className="modalBackground">
          <div className="modalContainer">
            <p>file saved</p>

            <button
              onClick={() => {
                setOpenSaveDraftModal(false);
              }}
              id="cancelBtn"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function SelectMentor({ onMentorDropdownMenuChange, list, sendMessage }) {
  const [showSentConfirmation, setShowSentConfirmation] = useState(false);

  const handleShowSentConfirmation = () => {
    sendMessage(false);
    setShowSentConfirmation(true);
  };
  return (
    <>
      {showSentConfirmation && (
        <SentConfirmation setShowSentConfirmation={setShowSentConfirmation} />
      )}
      <div className="select-dropdown">
        <button type="button" onClick={handleShowSentConfirmation}>
          send
        </button>

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

function SentConfirmation({ setShowSentConfirmation }) {
  return (
    <>
      {" "}
      <div className="show-element">
        {" "}
        <button
          onClick={() => {
            setShowSentConfirmation(false);
          }}
          id="cancelBtn"
        >
          OK
        </button>
        <div>file sent</div>
      </div>
    </>
  );
}

export default SendNewMessage;
