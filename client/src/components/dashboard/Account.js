import { useState, React } from "react";

function Account({ user }) {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState({ first: "", second: "" });
  const [validationError, setValidationError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  console.log(password);
  console.log(newPass);

  // handler for inputs
  // maybe ternary operators here?
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
  const changePassword = (newPassOne, newPassTwo) => {
    if (newPassOne === newPassTwo && newPassOne && newPassTwo) {
      return true;
    }
    return false;
  };

  // function to send typed password for comparison with existing hashed password
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

  // function to submit typed passwords
  const submitPassChange = async (e) => {
    e.preventDefault();
    setMatchError(false);
    setValidationError(false);
    let isOldPass = await confirmPassword(password);
    let matched = changePassword(newPass.first, newPass.second);
    if(!isOldPass) setValidationError(true);
    if(!matched) setMatchError(true);
    if(isOldPass && matched) {
      console.log("change database")
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
            />

            <label htmlFor="retype-new-password">retype new password</label>
            <input
              id="retype-new-password"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleChange(e)}
            />
            {matchError && (
              <h5 style={{ color: "rgb(219, 104, 104)" }}>
                Please enter two matching passwords.
              </h5>
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
