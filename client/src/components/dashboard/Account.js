import { useState, React } from "react";

function Account({ user }) {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState({ first: "", second: "" });
  const [validationError, setValidationError] = useState(false);
  console.log(password);
  console.log(newPass);

  const handleChange = (e) => {
    if (e.target.id === "old-password") {
      setPassword(e.target.value);
    } else if (e.target.id === "new-password") {
      setNewPass({ ...newPass, first: e.target.value });
    } else {
      setNewPass({ ...newPass, second: e.target.value });
    }
  };

  // function to check input errors and set new password
  const changePassword = ()=> {
    setValidationError(false);
    console.log("test");
  }

  // function to send typed password for comparison with existing hashed password
  const confirmPassword = async (e) => {
    e.preventDefault();
    try {
      const body = { enteredPwd: password, hashedPwd: user.user_password };
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
      console.log(result);
      if (!result) {
        setValidationError(true);
      } else {
        changePassword();
      }
    } catch {}
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
          <form onSubmit={confirmPassword}>
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
              <h5 style={{ color: "red" }}>
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
