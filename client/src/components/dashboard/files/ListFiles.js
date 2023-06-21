import React, { useState, useEffect } from "react";

// components
import Element from "./Element";
import EmptyList from "../EmptyList";

const ListFiles = ({ senderUsername, setShowDrafts }) => {
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

  //delete draft function

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
      <div className="relative" data-testid="list-files">
        <div
          className="titleCloseBtn"
          onClick={() => {
            setShowDrafts(false);
          }}
        >
          X
        </div>

        <h1>Drafts</h1>

        {drafts.length !== 0 && drafts[0].draft_id !== null ? (
          drafts.map((draft) => {
            return (
              <>
                <hr />
                <Element
                  draft={draft}
                  deleteDraft={deleteDraft}
                  setDraftsChange={setDraftsChange}
                  senderUsername={senderUsername}
                  allDrafts={allDrafts}
                />
              </>
            );
          })
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
};

export default ListFiles;
