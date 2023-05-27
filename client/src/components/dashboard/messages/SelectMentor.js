import React, { useState } from "react";
import SentConfirmation from "../confirmations/SentConfirmation";

function SelectMentor({ onMentorDropdownMenuChange, list, sendMessage }) {
  const [showSentConfirmation, setShowSentConfirmation] = useState(false);

  const handleShowSentConfirmation = () => {
    sendMessage(false);
    setShowSentConfirmation(true);
  };

  return (
    <>
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
        {showSentConfirmation && (
          <SentConfirmation
            setShowSentConfirmation={() => setShowSentConfirmation(true)}
          />
        )}
      </div>
    </>
  );
}

export default SelectMentor;
