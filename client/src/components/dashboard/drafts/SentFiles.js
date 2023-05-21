import React, { useState, useEffect } from "react";
import "../../../styles/listFiles.css";

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
      {allSentDrafts.map((draft) => {
        return <Text draft={draft} setShowSent={setShowSent} />;
      })}
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
      <div className="list-files">
        <div className="titleCloseBtn">
          <div
            className="titleCloseBtn"
            onClick={() => {
              setShowSent(false);
            }}
          >
            X
          </div>
        </div>
        <hr />
        <div className="flex">
          <div className="flex">
            <div>Title</div>
            <div>{draft.message_title}</div>
          </div>
          <button onClick={handleShowText}>open</button>
        </div>
        {showText && (
          <div>
            <h2 className="icon-heading">Text</h2>
            <br /> {draft.message_text}
          </div>
        )}
        <hr />
      </div>
    </>
  );
}

export default SentFiles;
