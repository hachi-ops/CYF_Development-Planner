import React, { useState, useEffect } from "react";

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
        <h1>Sent Files</h1>
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowSent(false);
          }}
        >
          X
        </div>

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
      <div className="element-wrapper">
        <hr />
        <div className="flex">
          <div className="title">{draft.message_title}</div>
          <div className="buttons">
            <button onClick={handleShowText}>open</button>
            <button>delete</button>
          </div>
        </div>

        {showText && (
          <div className="element-text ">
            <p>{draft.message_text}</p>

            <button onClick={handleShowText}>cancel</button>
          </div>
        )}
      </div>
    </>
  );
}

export default SentFiles;
