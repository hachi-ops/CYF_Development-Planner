// import React, { useState } from "react";

// //components
// import DraftsControls from "./DraftsControls";
// import MessagesControls from "./MessagesControls";
// import AccountControls from "./AccountControls";

// function DashboardNavigation({ user, handleUpdate }) {
//   const [filesControlButtons, setFilesControlButtons] = useState(false);
//   const [messagesControlButtons, setMessagesControlButtons] = useState(false);
//   const [accountControlButtons, setAccountControlButtons] = useState(false);

//   const handleToggleFiles = () => {
//     setFilesControlButtons(!filesControlButtons);
//     setMessagesControlButtons(false);
//     setAccountControlButtons(false);
//   };

//   const handleToggleMessages = () => {
//     setMessagesControlButtons(!messagesControlButtons);
//     setFilesControlButtons(false);
//     setAccountControlButtons(false);
//   };

//   const handleToggleAccount = () => {
//     setAccountControlButtons(!accountControlButtons);
//     setFilesControlButtons(false);
//     setMessagesControlButtons(false);
//   };

//   return (
//     <>
//       <div className="buttons flex">
//         {boxes.map((item) => (
//           <div
//             key={item.title}
//             className="icon-heading flex"
//             onClick={item.toggle}
//           >
//             <h2 style={item.h2Style}>{item.title}</h2>{" "}
//             <img
//               src={item.img}
//               alt="icon"
//               style={item.imgStyle}
//               className="dashboard-icon"
//             />
//           </div>
//         ))}
//         {filesControlButtons && (
//           <DraftsControls name={user.username} user={user} />
//         )}
//         {messagesControlButtons && <MessagesControls name={user.username} />}
//         {accountControlButtons && (
//           <AccountControls
//             user={user}
//             handleUpdate={handleUpdate}
//             setAccountControlButtons={setAccountControlButtons}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default DashboardNavigation;
