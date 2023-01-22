import React from "react";
import {
  PLAN_ENTRY_MAXLENGTH,
  FEEDBACK_TEXTAREA_NUMROWS,
  FEEDBACK_TEXTAREA_NUMCOLS,
  PLAN_PLACEHOLDERS,
} from "../../data/constants";
import "../../../src/styles.css";

import RemainingCharactersText from "./RemainingCharactersText";

import { saveFeedback } from "./feedbackFunctions";


const DisplayFeedbackEditorPage = ({
  userName,
  //displayTimeStamp,
//  theCurrentTimeStamp,
  //splan,mplan,aplan,rplan,tplan,
  selectedInfo,
  feedbackText,
  setFeedbackText,
  feedbackCharacterCount,
  setFeedbackCharacterCount,
  newFeedback,
  setNewFeedback,
  // setSelectedRecordInfo,
  setSaved,
  setChanged,
  // feedbackCreatedTimeStamp,
  // setFeedbackCreatedTimeStamp,
  backToPageToggle,
  setBackToPageToggle,
  allEmpty,
  discardFeedback,
  saveThenGotoFeedback,
  newOrChanged,
  gotoSelectFeedback,
  handleChange
}) => {
  console.log(newFeedback)
  console.log(selectedInfo)
  return (
    <div className="feedbacks-page-style">
      <header className="display-flex">
        <div className="title-username-header">{userName}</div>
        {/* <div className="title-header timestamp-header">{displayTimeStamp}</div> */}
      </header>
      <section className="display-flex-column-container">
        <section className="flex-container">
          <div className="flex-child scroll">
            <h2>SPECIFIC</h2>
            <p>{selectedInfo.splan}</p>
            <h2>MEASURABLE</h2>
            <p>{selectedInfo.mplan}</p>
            <h2>ACHIEVABLE</h2>
            <p>{selectedInfo.aplan}</p>
            <h2>RELEVANT</h2>
            <p>{selectedInfo.rplan}</p>
            <h2>TIMEBOUND</h2>
            <p>{selectedInfo.tplan}</p>
          </div>
          <div className="flex-child">
            <form>
              <div className="textarea-label">
                <textarea
                  className="text-area"
                  rows={FEEDBACK_TEXTAREA_NUMROWS}
                  cols={FEEDBACK_TEXTAREA_NUMCOLS}
                  maxLength={PLAN_ENTRY_MAXLENGTH}
                  // EG "S-input"
                  id="feedback"
                  name="feedback"
                  autoComplete="off"
                  value={feedbackText}
                  onChange={(event) => handleChange(event)}
                ></textarea>
              </div>
            </form>
          </div>
        </section>
        <section className="buttons-container">
          <button className="button-78" onClick={() => discardFeedback()}>
            Discard
          </button>
          <button
            className="button-78"
            onClick={() =>
              saveFeedback(
                userName,
                // theCurrentTimeStamp,
                // feedbackCreatedTimeStamp,
                feedbackText,
                selectedInfo,
                newFeedback,
                setNewFeedback,
                setSaved,
                setChanged,
                // setSelectedRecordInfo,
                // setFeedbackCreatedTimeStamp
                backToPageToggle,
                setBackToPageToggle
              )
            }
            // If the Text Area is empty, disable the Save option
            disabled={allEmpty()}
          >
            Save
          </button>
          <button
            className="button-78"
            onClick={saveThenGotoFeedback}
            // If the Text Area is empty, disable the 'Save & Close' option
            disabled={allEmpty()}
          >
            Save & Close
          </button>
          <button
            className="button-78"
            onClick={gotoSelectFeedback}
            // If it is an unsaved new feedback entry or changes have been made, disable this button
            disabled={newOrChanged()}
          >
            Request Feedback
          </button>
        </section>
      </section>
    </div>
  );
};

export default DisplayFeedbackEditorPage;
