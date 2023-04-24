import React, { useState } from "react";
import ListFiles from "../drafts/ListFiles";
// import Drafts from "../drafts/Drafts";
import SentFiles from "../drafts/SentFiles";
import AddNewFile from "../drafts/AddNewFile";

function FilesControls({ name }) {
  const [draftsButtonText, setDraftsButtonText] = useState("drafts");
  const [sentButtonText, setSentButtonText] = useState("sent");
  const [newButtonText, setNewButtonText] = useState("new");

  const [showDrafts, setShowDrafts] = useState(false);
  const handleShowDrafts = () => {
    setShowDrafts(!showDrafts);
    setShowSent(false);
    setShowAddNew(false);
    setSentButtonText("sent");
    setNewButtonText("new");
    setDraftsButtonText((state) => (state === "drafts" ? "close" : "drafts"));
  };

  const [showSent, setShowSent] = useState(false);

  const handleShowSent = () => {
    setShowSent(!showSent);
    setShowDrafts(false);
    setShowAddNew(false);
    setDraftsButtonText("drafts");
    setNewButtonText("new");
    setSentButtonText((state) => (state === "sent" ? "close" : "sent"));
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const handleShowAddNew = () => {
    setShowAddNew(!showAddNew);
    setShowSent(false);
    setShowDrafts(false);
    setDraftsButtonText("drafts");
    setSentButtonText("sent");
    setNewButtonText((state) => (state === "new" ? "close" : "new"));
  };

  return (
    <>
      <h2 className="icon-heading">Files</h2>
      <div className="buttons">
        <button onClick={handleShowDrafts}>{draftsButtonText}</button>
        <button onClick={handleShowSent}>{sentButtonText}</button>
        <button onClick={handleShowAddNew}>{newButtonText}</button>
      </div>
      {showDrafts ? <ListFiles senderUsername={name} /> : false}
      {showSent ? <SentFiles /> : false}
      {showAddNew ? <AddNewFile senderUsername={name} /> : false}
    </>
  );
}

export default FilesControls;
