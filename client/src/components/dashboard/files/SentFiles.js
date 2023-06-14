import React, { useState, useEffect } from "react";

import EmptyList from "../EmptyList";
import Text from "./Text";

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
            return (
              <Text
                draft={draft}
                setShowSent={setShowSent}
                // trashIcon={trashIcon}
              />
            );
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}

export default SentFiles;
