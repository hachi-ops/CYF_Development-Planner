import React, { useState, useEffect } from "react";

// components
import DraftText from "./DraftText";

function Drafts({ senderUsername }) {
  //fetch all drafts
  const [allDrafts, setAllDrafts] = useState([]);
  const [draftsChange, setDraftsChange] = useState(false);
  const getFiles = async () => {
    try {
      const res = await fetch("/dashboard/drafts", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      console.log(parseData);
      setAllDrafts(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFiles();
    setDraftsChange(false);
  }, [draftsChange]);
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

  useEffect(() => {
    setDrafts(allDrafts);
  }, [allDrafts]);
  return (
    <>
      {allDrafts.length !== 0 &&
        allDrafts[0].draft_id !== null &&
        allDrafts.map((draft) => {
          return (
            <DraftText
              key={draft.draft_id}
              draft={draft}
              allDrafts={allDrafts}
              setDraftsChange={setDraftsChange}
              senderUsername={senderUsername}
              deleteDraft={deleteDraft}
            />
          );
        })}
    </>
  );
}

export default Drafts;
