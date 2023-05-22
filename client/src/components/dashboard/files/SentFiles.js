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
      <div className="list-files">
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
    setShowText(true);
  };
  return (
    <>
      <div className="list-files">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowText(false);
          }}
        >
          X
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
            <br /> {draft.message_text}
          </div>
        )}
      </div>
    </>
  );
}

export default SentFiles;
