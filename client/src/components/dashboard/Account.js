import { useState, React } from "react";

function Account({ user, handleUpdate }) {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState({ first: "", second: "" });
  const [validationError, setValidationError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [success, setSuccess] = useState(false);

  // handler for inputs
  const handleChange = (e) => {
    if (e.target.id === "old-password") {
      setPassword(e.target.value);
    } else if (e.target.id === "new-password") {
      setNewPass({ ...newPass, first: e.target.value });
    } else {
      setNewPass({ ...newPass, second: e.target.value });
    }
  };

  // function to check new passwords are entered and they match, triggering errors if they don't
  const checkPassword = (newPassOne, newPassTwo) => {
    if (
      newPassOne === newPassTwo &&
      newPassOne &&
      newPassTwo &&
      (newPassOne || newPassTwo) !== password
    ) {
      return true;
    }
    return false;
  };

  // function to send inputted password for comparison with existing hashed password
  const confirmPassword = async (entered) => {
    try {
      const body = { enteredPwd: entered, hashedPwd: user.user_password };
      const headers = {
        "Content-Type": "application/json",
        "jwt_token": localStorage.token,
      };
      const response = await fetch("/dashboard/validPword", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err.message);
    }
  };

  // update database with new user password
  const updatePassword = async (updated) => {
    try {
      const body = { updatedPwd: updated, userId: user.user_id };
      const headers = {
        "Content-Type": "application/json",
        "jwt_token": localStorage.token,
      };
      const response = await fetch("/dashboard/updatePword", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });
      const result = await response.json();
      console.log(result)
      handleUpdate();
    } catch (err) {
      console.error(err.message);
    }
  };

  // function to submit typed passwords
  const submitPassChange = async (e) => {
    e.preventDefault();
    setMatchError(false);
    setValidationError(false);
    setSuccess(false);
    let isOldPass = await confirmPassword(password);
    let matched = checkPassword(newPass.first, newPass.second);
    if (!isOldPass) setValidationError(true);
    if (!matched) setMatchError(true);
    if (isOldPass && matched) {
      updatePassword(newPass.first);
      setPassword("");
      setNewPass({ first: "", second: "" });
      setSuccess(true);
    }
  };

  return (
    <>
      <section>
        <h2>your profile</h2>
        <section>
          <h3>
            Name: {user.user_fname} {user.user_lname}{" "}
          </h3>
          <h3>User Name: {user.username}</h3>
          <h3>Email: {user.user_email}</h3>
          <h3>Role: {user.user_role}</h3>
        </section>

        <section>
          <form onSubmit={submitPassChange}>
            <h3>change password</h3>
            <button>submit</button>

            <label htmlFor="old-password">type old password</label>
            <input
              id="old-password"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleChange(e)}
              value={password}
            />
            {validationError && (
              <h5 style={{ color: "rgb(219, 104, 104)" }}>
                Incorrect password.
              </h5>
            )}
            <label htmlFor="new-password">type new password</label>
            <input
              id="new-password"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleChange(e)}
              value={newPass.first}
            />

            <label htmlFor="retype-new-password">retype new password</label>
            <input
              id="retype-new-password"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleChange(e)}
              value={newPass.second}
            />
            {matchError && (
              <h5 style={{ color: "rgb(219, 104, 104)" }}>
                Please enter two new matching passwords.
              </h5>
            )}
            {success && (
              <h5 style={{ color: "rgb(25, 135, 84)" }}>Password Updated</h5>
            )}
          </form>
        </section>

        <section>
          <h3> change email</h3>
          <label htmlFor="new-email">type old email</label>
          <input id="new-email" type="text" placeholder="type here..." />s
        </section>
        <section>
          {" "}
          <label htmlFor="retype-new-email">type new email</label>
          <input id="retype-new-email" type="text" placeholder="type here..." />
          s
        </section>
      </section>
    </>
  );
}
export default Account;
