import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlanDefinition from "./PlanDefinition";

import {
  S_PLAN,
  M_PLAN,
  A_PLAN,
  R_PLAN,
  T_PLAN,
} from "../../../src/data/constants.js";

import { savePlan, setupTimeValues } from "./planFunctions";

import "../../../src/styles.css";

const PlanEditor = () => {
  const [userName, setUserName] = useState(null);
  const [selectedRecordInfo, setSelectedRecordInfo] = useState(null);

  const [planTextArray, setplanTextArray] = useState(["", "", "", "", ""]);

  const [planCharacterCount, setPlanCharacterCount] = useState([0, 0, 0, 0, 0]);

  const [newPlan, setNewPlan] = useState(null);
  const [changed, setChanged] = useState(false);
  const [saved, setSaved] = useState(false);
  const [planCreatedTimeStamp, setPlanCreatedTimeStamp] = useState(null);
  const [timeValues,] = useState(setupTimeValues());
  
  const navigate = useNavigate();

  let [displayTimeStamp, theCurrentTimeStamp] = timeValues;
  

  const saveThenGotoPlans = () => {
    savePlan(
      userName,
      theCurrentTimeStamp,
      planCreatedTimeStamp,
      planTextArray,
      newPlan,
      setNewPlan,
      setSaved,
      setChanged,
      setSelectedRecordInfo,
      setPlanCreatedTimeStamp
    );

    // Go to the Plans page
    navigate("/plans", {
      state: { name: userName}, 
      replace: true,     
    });
  };

  const allEmpty = () => planCharacterCount.every((element) => element === 0);

  const discardPlan = () => {
    let leavePage, answer;
    if (newPlan) {
      if (!changed) {
        // No changes
        leavePage = true;
      } else {
        answer = window.confirm(
          "Be aware,\nif you press OK now,\nALL your changes will be lost!"
        );
      }
    }
    // Existent Plan
    else if (changed) {
      if (saved) {
        answer = window.confirm(
          "Be aware,\nif you press OK now,\nALL your changes since your last SAVE will be lost!"
        );
      } else {
        answer = window.confirm(
          "Be aware,\nif you press OK now,\nALL your changes will be lost!"
        );
      }
    } else {
      // Otherwise leave the page
      leavePage = true;
    }

    if (leavePage || answer) {
      // Go to the Plans page
      navigate("/plans", {
        state: { name: location.state.planSelectedInfo.theUserName },
        replace: false,
      });
    }
  };

  const location = useLocation();

  useEffect(() => {
    // ONLY DO THIS THE ONCE! USE 'newPlan' TO DETERMINE THIS I.E. AS IF useEffect({...}, [])
    if (newPlan === null) { // Ensure done ONCE!
      let { theIndex, thePlan, theUserName } = location.state.planSelectedInfo;
      setSelectedRecordInfo({ theIndex: theIndex, thePlan: thePlan });
      setUserName(theUserName);
      if (theIndex === 0) {
        // This indicates that the user is creating a new plan
        setNewPlan(true);
      } else {
        setNewPlan(false);
      }
    }
  }, [location, newPlan]);

  useEffect(() => {
    // Check whether this is a new plan?
    // No!
    if (selectedRecordInfo !== null && !newPlan) {
      setplanTextArray(() => [
        selectedRecordInfo.thePlan.splan,
        selectedRecordInfo.thePlan.mplan,
        selectedRecordInfo.thePlan.aplan,
        selectedRecordInfo.thePlan.rplan,
        selectedRecordInfo.thePlan.tplan,
      ]);
      setPlanCharacterCount(() => [
        selectedRecordInfo.thePlan.splan.length,
        selectedRecordInfo.thePlan.mplan.length,
        selectedRecordInfo.thePlan.aplan.length,
        selectedRecordInfo.thePlan.rplan.length,
        selectedRecordInfo.thePlan.tplan.length,
      ]);
      setPlanCreatedTimeStamp(selectedRecordInfo.thePlan.created_timestamp);
    }
    // Otherwise for a new plan the above fields will be empty and 0
  }, [selectedRecordInfo, newPlan]);

  return (
    <div className="plans-page-style">
      <header className="display-flex">
        <div className="title-username-header">{userName}</div>
        <div className="title-header timestamp-header">{displayTimeStamp}</div>
      </header>
      <section className="grid-container-border">
        <PlanDefinition
          whichPlan={S_PLAN}
          letter={"S"}
          attribute={"SPECIFIC"}
          planTextArray={planTextArray}
          setplanTextArray={setplanTextArray}
          planCharacterCount={planCharacterCount}
          setPlanCharacterCount={setPlanCharacterCount}
          setChanged={setChanged}
        />
        <PlanDefinition
          whichPlan={M_PLAN}
          letter={"M"}
          attribute={"MEASURABLE"}
          planTextArray={planTextArray}
          setplanTextArray={setplanTextArray}
          planCharacterCount={planCharacterCount}
          setPlanCharacterCount={setPlanCharacterCount}
          setChanged={setChanged}
        />
        <PlanDefinition
          whichPlan={A_PLAN}
          letter={"A"}
          attribute={"ACHIEVABLE"}
          planTextArray={planTextArray}
          setplanTextArray={setplanTextArray}
          planCharacterCount={planCharacterCount}
          setPlanCharacterCount={setPlanCharacterCount}
          setChanged={setChanged}
        />
        <PlanDefinition
          whichPlan={R_PLAN}
          letter={"R"}
          attribute={"RELEVANT"}
          planTextArray={planTextArray}
          setplanTextArray={setplanTextArray}
          planCharacterCount={planCharacterCount}
          setPlanCharacterCount={setPlanCharacterCount}
          setChanged={setChanged}
        />
        <PlanDefinition
          whichPlan={T_PLAN}
          letter={"T"}
          attribute={"TIMEBOUND"}
          planTextArray={planTextArray}
          setplanTextArray={setplanTextArray}
          planCharacterCount={planCharacterCount}
          setPlanCharacterCount={setPlanCharacterCount}
          setChanged={setChanged}
        />
      </section>
      <section className="buttons-container">
        <button
          className="button-78"
          onClick={() => discardPlan(theCurrentTimeStamp)}
        >
          Discard
        </button>
        <button
          className="button-78"
          onClick={() =>
            savePlan(
              userName,
              theCurrentTimeStamp,
              planCreatedTimeStamp,
              planTextArray,
              newPlan,
              setNewPlan,
              setSaved,
              setChanged,
              setSelectedRecordInfo,
              setPlanCreatedTimeStamp
            )
          }
          // If all the fields are empty, disable the Save option
          disabled={allEmpty()}
        >
          Save
        </button>
        <button
          className="button-78"
          onClick={saveThenGotoPlans}
          // If all the fields are empty, disable the Save option
          disabled={allEmpty()}
        >
          Save & Close
        </button>
        <button
          className="button-78"
        >
          Request Feedback
        </button>
      </section>
    </div>
  );
};

export default PlanEditor;
