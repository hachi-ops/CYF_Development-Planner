import {
  PREAMBLE_SIZE,
  S_PLAN,
  M_PLAN,
  A_PLAN,
  R_PLAN,
  T_PLAN,
} from "../../../src/data/constants.js";

export function determine_current_timestamp() {
  const currentTimeStamp = new Date(); // Current Date and Time
  const dayNumber = currentTimeStamp.getUTCDate(); // Day

  // getUTCMonth() is zero-based value (where zero indicates the first month of the year).
  // So January is ZERO
  const monthNumber = currentTimeStamp.getUTCMonth(); // Month
  const yearNumber = currentTimeStamp.getUTCFullYear(); // Year
  const hoursNumber = currentTimeStamp.getUTCHours(); // Hours
  const minutesNumber = currentTimeStamp.getUTCMinutes(); // Minutes
  const secondsNumber = currentTimeStamp.getUTCSeconds(); // Second

  return [
    dayNumber,
    monthNumber,
    yearNumber,
    hoursNumber,
    minutesNumber,
    secondsNumber,
  ];
}

function createPreambleText(planTextArray) {
  let result = "";
  for (let i = 0; i < planTextArray.length; i++) {
    result += planTextArray[i].trim() + " ";
    if (result.length > PREAMBLE_SIZE) {
      break;
    }
  }
  return result.trim().slice(0, PREAMBLE_SIZE);
}

const writePlan = async (
  theUserName,
  theCurrentTimeStamp,
  planTextArray,
  setNewPlan,
  setSaved,
  setChanged,
  setSelectedRecordInfo,
  setPlanCreatedTimeStamp
) => {
  const preambleText = createPreambleText(planTextArray);
  try {
    const body = {
      username: theUserName,
      // For new records, the created date and the amended date are identical
      created_timestamp: theCurrentTimeStamp,
      amended_timestamp: theCurrentTimeStamp,
      splan: planTextArray[S_PLAN],
      mplan: planTextArray[M_PLAN],
      aplan: planTextArray[A_PLAN],
      rplan: planTextArray[R_PLAN],
      tplan: planTextArray[T_PLAN],
      preamble: preambleText,
    };

    const response = await fetch("http://localhost:4000/plans/writeplan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    setNewPlan(false);
    setSaved(true);
    setChanged(false);

    setSelectedRecordInfo({ thePlan: jsonData[0] });
    setPlanCreatedTimeStamp(jsonData[0].created_timestamp);
  } catch (err) {
    console.error(err.message);
  }
};

const updatePlan = async (
  theUserName,
  planTextArray,
  createdTimestamp,
  setSaved,
  setChanged
) => {
  const [
    dayNumber,
    monthNumber,
    yearNumber,
    hoursNumber,
    minutesNumber,
    secondsNumber,
  ] = determine_current_timestamp();

  const amendedTimeStamp = // EG :20221122:184715
    `:${yearNumber}${String(monthNumber).padStart(2, "0")}${String(
      dayNumber
    ).padStart(2, "0")}:` +
    `${String(hoursNumber).padStart(2, "0")}${String(minutesNumber).padStart(
      2,
      "0"
    )}` +
    `${String(secondsNumber).padStart(2, "0")}`;

  const preambleText = createPreambleText(planTextArray);

  try {
    const body = {
      username: theUserName,
      created_timestamp: createdTimestamp,
      amended_timestamp: amendedTimeStamp,
      splan: planTextArray[S_PLAN],
      mplan: planTextArray[M_PLAN],
      aplan: planTextArray[A_PLAN],
      rplan: planTextArray[R_PLAN],
      tplan: planTextArray[T_PLAN],
      preamble: preambleText,
    };

    await fetch("http://localhost:4000/plans/updateplan", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setSaved(true);
    setChanged(false);
  } catch (err) {
    console.error(err.message);
  }
};

export function savePlan(
  theUserName,
  theCurrentTimeStamp,
  theCreatedTimeStamp,
  planTextArray,
  newPlan,
  setNewPlan,
  setSaved,
  setChanged,
  setSelectedRecordInfo,
  setPlanCreatedTimeStamp
) {
  if (newPlan) {
    // This is a new Plan
    writePlan(
      theUserName,
      theCurrentTimeStamp,
      planTextArray,
      setNewPlan,
      setSaved,
      setChanged,
      setSelectedRecordInfo,
      setPlanCreatedTimeStamp
    );
  } else {
    // Update existing Plan
    updatePlan(
      theUserName,
      planTextArray,
      theCreatedTimeStamp,
      setSaved,
      setChanged
    );
  }
  return;
}
