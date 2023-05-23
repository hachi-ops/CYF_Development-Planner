import React, { useState, useEffect } from "react";

// components
import Element from "./Element";
import EmptyList from "../EmptyList";

const ListFiles = ({ senderUsername, setShowDrafts }) => {
  console.log(senderUsername);
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
      <div className="list-files">
        <div className="">
          <div className="titleCloseBtn">
            <div
              onClick={() => {
                setShowDrafts(false);
              }}
            >
              X
            </div>
          </div>
        </div>
        <div data-testid="list-files">
          {drafts.length !== 0 && drafts[0].draft_id !== null ? (
            drafts.map((draft, index) => {
              return (
                <>
                  <hr />
                  <br />
                  <Element
                    draft={draft}
                    deleteDraft={deleteDraft}
                    allDrafts={allDrafts}
                    setDraftsChange={setDraftsChange}
                    senderUsername={senderUsername}
                  />
                </>
              );
            })
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </>
  );
};

export default ListFiles;
