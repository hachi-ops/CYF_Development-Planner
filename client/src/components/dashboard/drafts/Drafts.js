import React, { useState, useEffect } from "react";

function Drafts() {
  const [allDrafts, setAllDrafts] = useState([]);

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
  }, []);
  return (
    <>
      {allDrafts.map((draft, index) => {
        return (
          <div className="form">
            <div>{`Title: ${draft.draft_title}`}</div>

            <div>{`Text: ${draft.draft_text}`}</div>
          </div>
        );
      })}
    </>
  );
}

export default Drafts;
