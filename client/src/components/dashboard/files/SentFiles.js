import React, { useState, useEffect } from "react";

import editIcon from "../../../images/Brainleaf-Free-Pencil-Pencil-red.64.png";
import editIcon2 from "../../../images/Saki-NuoveXT-Actions-pencil.64.png";
import trashIcon from "../../../images/Graphicrating-Koloria-Trash-Delete.32.png";
import sendIcon from "../../../images/icons8-send-64.png";
import editIcon3 from "../../../images/Graphicrating-Koloria-File-Edit.32.png";
import Element from "./Element";
import EmptyList from "../EmptyList";
import Text from "./Text";
import XbuttonSentDrafts from "./xButtons/XbuttonSentDrafts";

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
        <XbuttonSentDrafts setShowSent={setShowSent} />
        <h1>Sent Files</h1>
        {allSentDrafts.length !== 0 && allSentDrafts[0].draft_id !== null ? (
          allSentDrafts.map((draft) => {
            return (
              <Text
                draft={draft}
                setShowSent={setShowSent}
                trashIcon={trashIcon}
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
