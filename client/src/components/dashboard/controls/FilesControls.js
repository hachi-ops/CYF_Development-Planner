import React, { useState } from "react";
import ListFiles from "../drafts/ListFiles";
import Drafts from "../drafts/Drafts";
import SentFiles from "../drafts/SentFiles";
import AddNewFile from "../drafts/AddNewFile";

function FilesControls({ name }) {
  const [showAll, setShowAll] = useState(false);
  const [allButtonText, setAllButtonText] = useState("all");
  const [draftsButtonText, setDraftsButtonText] = useState("drafts");
  const [sentButtonText, setSentButtonText] = useState("sent");
  const [newButtonText, setNewButtonText] = useState("new");

  const handleShowAll = () => {
    setShowAll(!showAll);
    setShowDrafts(false);
    setShowSent(false);
    setShowAddNew(false);
    setDraftsButtonText("drafts");
    setSentButtonText("sent");
    setNewButtonText("new");
    setAllButtonText((state) => (state === "all" ? "close" : "all"));
  };

  const [showDrafts, setShowDrafts] = useState(false);

  const handleShowDrafts = () => {
    setShowDrafts(!showDrafts);
    setShowAll(false);
    setShowSent(false);
    setShowAddNew(false);
    setAllButtonText("all");
    setSentButtonText("sent");
    setNewButtonText("new");
    setDraftsButtonText((state) => (state === "drafts" ? "close" : "drafts"));
  };

  const [showSent, setShowSent] = useState(false);

  const handleShowSent = () => {
    setShowSent(!showSent);
    setShowAll(false);
    setShowDrafts(false);
    setShowAddNew(false);
    setAllButtonText("all");
    setDraftsButtonText("drafts");
    setNewButtonText("new");
    setSentButtonText((state) => (state === "sent" ? "close" : "sent"));
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const handleShowAddNew = () => {
    setShowAddNew(!showAddNew);
    setShowSent(false);
    setShowAll(false);
    setShowDrafts(false);
    setAllButtonText("all");
    setDraftsButtonText("drafts");
    setSentButtonText("sent");
    setNewButtonText((state) => (state === "new" ? "close" : "new"));
  };

  return (
    <>
      <h2 className="icon-heading">Files</h2>
      <div className="buttons">
        <button onClick={handleShowAll}>{allButtonText}</button>
        <button onClick={handleShowDrafts}>{draftsButtonText}</button>
        <button onClick={handleShowSent}>{sentButtonText}</button>
        <button onClick={handleShowAddNew}>{newButtonText}</button>
      </div>
      {showAll ? <ListFiles senderUsername={name} /> : false}
      {showDrafts ? <Drafts /> : false}
      {showSent ? <SentFiles /> : false}
      {showAddNew ? <AddNewFile senderUsername={name} /> : false}
    </>
  );
}

export default FilesControls;
