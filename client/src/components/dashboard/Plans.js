import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PlansNavbar from "../../../src/components/dashboard/PlansNavBar";
import DisplayListItem from "./DisplayListItem";
import "../../../src/styles.css";

function Plans() {
  const [allPlansFetched, setAllPlansFetched] = useState([]);
  const [planSelectedInfo, setPlanSelectedInfo] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const theUserName = location.state.name;

  const handleClick = (_, theIndex) => {
  
    // Need to subtract one because the 0th item represents the "Create Plan" message
    // So the first plan is indexed with the value 1
    // The second is indexed as 2, etc.
    // Therefore subtract 1 to determine the actual true index
    const actualIndex = theIndex - 1;
    setPlanSelectedInfo({
      theIndex: theIndex,
      theUserName: theUserName,
      thePlan: allPlansFetched[actualIndex],
    });
  };

  function deletePlan(index) {
    let answer = window.confirm("Are You Sure?");
    if (answer) {
      deletePlan2(index)
    } 
  }

  async function deletePlan2(deleteIndex) {
    // Need to subtract one because the 0th item represents the "Create Plan" message
    // So the first plan is indexed with the value 1
    // The second is indexed as 2, etc.
    // Therefore subtract 1 to determine the actual true index

    const actualIndex = deleteIndex - 1;
    const serialId = allPlansFetched[actualIndex].plan_serial_id;
    try {
      await fetch(`http://localhost:4000/plans/${serialId}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });
      setAllPlansFetched(
        allPlansFetched.filter((_, index) => index !== actualIndex)
      );
    } catch (err) {
        console.error(err.message);
    }
  }

  // Fetch all the user's plans
  useEffect(() => {

    const getPlans = async () => {
        try {
          const response = await fetch("http://localhost:4000/plans/" + theUserName);
          const jsonData = await response.json();
          setAllPlansFetched(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    getPlans();
  }, [theUserName]);

  useEffect(() => {    
    if (planSelectedInfo) {
                    navigate("/plan-editor", {
                        state: { planSelectedInfo: planSelectedInfo },
                        replace: false,
                    });
    };
  }, [planSelectedInfo, navigate]);

  const keysArray = [];
  const preambleTextArray = [];
  allPlansFetched.forEach((element, index) => {
    keysArray.push(element.amended_timestamp.replace(/:/g, "")); // YYYYMMDDHHMMSS
    preambleTextArray.push(element.preamble);
  });

  // Create a 'dummy' record for the NEW RECORD OPTION
  keysArray.unshift(0);
  preambleTextArray.unshift("Click to create a new plan.");

  const orderedList = (
    <ol className="main-menu-items">
      {keysArray.map((eachKey, index) => {
        return (
          <li className="main-menu-item-container" key={eachKey}>
            <DisplayListItem
              theIndex={index}
              theKey={eachKey}
              preambleText={preambleTextArray[index]}
              handleClick={handleClick}
              deletePlan={deletePlan}
            />
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <PlansNavbar />
      <div className="username-header">{theUserName}</div>
      <div className="main-menu-container">
        <div className="main-menu">{orderedList}</div>
      </div>
    </>
  );

}

export default Plans;
