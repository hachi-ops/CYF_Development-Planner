import React, { useState, useEffect } from "react";

function SentFiles({ deleteDraft }) {
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

  const [drafts, setDrafts] = useState([]); //empty array
  async function deleteDraft(id) {
    try {
      await fetch(`/dashboard/drafts/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });

      setDrafts(drafts.filter((draft) => draft.draft_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <div className="flex">
        <div className="flex">
          <div>Title</div>
          <div>{draft.message_title}</div>
        </div>
        <button onClick={handleShowText}>open</button>
      </div>

      {showText && (
        <div>
          <button onClick={() => deleteDraft(draft.draft_id)}>Delete</button>
          <h2 className="icon-heading">Text</h2>
          <br /> {draft.message_text}
        </div>
      )}
      <hr />
    </>
  );
}
export default SentFiles;
