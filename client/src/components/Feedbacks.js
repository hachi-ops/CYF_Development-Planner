// import React, { useState, useEffect } from "react";

// function Feedbacks() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   //delete feedback function

//   async function deleteFeedback(id) {
//     try {
//       await fetch(`http://localhost:4000/feedbacks/${id}`, {
//         method: "DELETE",
//       });

//       setFeedbacks(feedbacks.filter((feedback) => feedback.feedback_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
//   async function getFeedbacks() {
//     const res = await fetch("http://localhost:4000/feedbacks");

//     const feedbacksArray = await res.json();

//     console.log(feedbacksArray);

//     setFeedbacks(feedbacksArray);
//   }
//   useEffect(() => {
//     getFeedbacks();
//   }, []);

//   console.log(feedbacks);
//   return (
//     <>
//       <h1>List Feedbacks</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Feedback</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map((feedback) => {
//             return (
//               // <tr key={feedback.feedback_id}>
//               //   <td>{feedback.feedback}</td>

//               <tr key={feedback.feedback_id}>
//                 <td>{feedback.feedback}</td>
//                 <td>
//                   <button>open</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteFeedback(feedback.feedback_id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Feedbacks;

import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
function Feedbacks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showSentFeedbacks = searchParams.get("filter") === "active";
  return (
    <>
      {" "}
      <h1>Feedbacks</h1>
      <ul>
        <li>Feedback 1</li>
        <li>Feedback 2</li>
        <li>Feedback 3</li>
      </ul>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        sent feedbacks
      </button>
      <button onClick={() => setSearchParams({})}>all feedbacks</button>
      {showSentFeedbacks ? (
        <h2>Showing sent feedbacks</h2>
      ) : (
        <h2>Showing all feedbacks</h2>
      )}
    </>
  );
}

export default Feedbacks;
