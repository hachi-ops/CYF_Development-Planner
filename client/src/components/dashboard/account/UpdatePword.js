import { useState, React } from "react";

const UpdatePword = ({ user, handleUpdate }) => {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState({ first: "", second: "" });
  const [validationError, setValidationError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openContainer, setopenContainer] = useState(false);

  // function to open/close input container
  const handleContainer = (e) => {
    e.preventDefault();
    setSuccess(false)
    setValidationError(false)
    setMatchError(false)
    setPassword("");
    setNewPass({ first: "", second: "" });
    setopenContainer(!openContainer);
  };

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
    console.log(user.password);
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
        jwt_token: localStorage.token,
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
        jwt_token: localStorage.token,
      };
      const response = await fetch("/dashboard/updatePword", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });
      const result = await response.json();
      console.log(result);
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
      <div className="details">
        <form onSubmit={submitPassChange}>
          <div className="change-details">
            <button onClick={(e) => handleContainer(e)}>
              {openContainer ? "close" : "open"}
            </button>
            <h3>change password</h3>
          </div>
          {openContainer && (
            <>
              <div>
                <label htmlFor="old-password">current password</label>
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
                <label htmlFor="new-password">new password</label>
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
                  <h5 style={{ color: "rgb(25, 135, 84)" }}>
                    Password Updated
                  </h5>
                )}
              </div>
              <>
                <button>submit</button>
              </>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default UpdatePword;
