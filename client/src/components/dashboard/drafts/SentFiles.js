import React, { useState, useEffect } from "react";

function SentFiles() {
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
        return <Text draft={draft} />;
      })}
    </>
  );
}

function Text({ draft }) {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <>
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
          {/* <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button> */}
          <h2 className="icon-heading">Text</h2>
          <br /> {draft.message_text}
        </div>
      )}
      <hr />
    </>
  );
}

export default SentFiles;
