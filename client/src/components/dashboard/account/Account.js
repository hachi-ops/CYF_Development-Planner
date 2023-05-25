import { React } from "react";
import UpdateEmail from "./UpdateEmail";
import UpdatePword from "./UpdatePword";

function Account({ user, handleUpdate, setShowAccountSettings }) {
  return (
    <>
      <div className="show-account">
        <div className="titleCloseBtn">
          <div
            onClick={() => {
              setShowAccountSettings(false);
            }}
          >
            X
          </div>
        </div>
        <h1>Your Account</h1>
        <div className="details">
          <h2>your profile</h2>
          <div className="">
            <h3>
              <span>Name: </span>
              {user.user_fname} {user.user_lname}{" "}
            </h3>
            <h3>
              <span>Username: </span>
              {user.username}
            </h3>
            <h3>
              <span>Email: </span>
              {user.user_email}
            </h3>
            <h3>
              <span>Role: </span>
              {user.user_role}
            </h3>
          </div>
        </div>
        <UpdatePword user={user} handleUpdate={handleUpdate} />
        <UpdateEmail user={user} handleUpdate={handleUpdate} />
      </div>
    </>
  );
}
export default Account;
