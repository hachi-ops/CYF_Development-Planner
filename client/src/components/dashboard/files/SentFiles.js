import React, { useState, useEffect } from "react";

import editIcon from "../../../images/Brainleaf-Free-Pencil-Pencil-red.64.png";
import editIcon2 from "../../../images/Saki-NuoveXT-Actions-pencil.64.png";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import sendIcon from "../../../images/icons8-send-64.png";
import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";

import EmptyList from "../EmptyList";

function SentFiles({ setShowSent }) {
  const [allSentDrafts, setAllSentDrafts] = useState([]);

  const getSentFiles = async () => {
    try {
      const res = await fetch("/dashboard/messages/sent", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);
      setAllSentDrafts(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSentFiles();
  }, []);

  return (
    <>
      <div className="show-element">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowSent(false);
          }}
        >
          X
        </div>
        <h1>Sent Files</h1>
        {allSentDrafts.length !== 0 && allSentDrafts[0].draft_id !== null ? (
          allSentDrafts.map((draft) => {
            return <Text draft={draft} setShowSent={setShowSent} />;
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}

function Text({ draft, setShowSent = { setShowSent } }) {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <>
      <div className="">
        <hr />
        <div className="">
          <div className="title">{draft.message_title}</div>
          <div className="buttons">
            <button onClick={handleShowText}>open</button>
            <button>delete</button>
          </div>
        </div>

        {showText && (
          <div className="show-element">
            <div
              className="titleCloseBtn"
              onClick={() => {
                setShowSent(false);
              }}
            >
              X
            </div>
            <button onClick={handleShowText}>cancel</button>

            <div className="element-container">
              <h2 className="element-title">{draft.message_title}</h2>
              <div>
                <p className="element-text">{draft.message_text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SentFiles;
