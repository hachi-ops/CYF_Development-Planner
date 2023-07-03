import { Link } from "react-router-dom";
import { useState } from "react";

function PasswordLink() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [linkSent, setLinkSent] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = async (email) => {
    try {
      const body = { email };
      const response = await fetch(
        "http://localhost:5000/resetLink/checkEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      if(result.rows===1) {
        setLinkSent(true);
      } else {
        setEmailError(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLinkSent(false);
    setEmailError(false);
    checkEmail(email);
    console.log("submitted");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>PASSWORD RESET</h1>
      <h5>
        Forgotten your password? Please enter your email address. You will
        receive a link to create a new password via email.
      </h5>
      <label htmlFor="enter-email">enter email</label>
      <input
        id="retype-new-email"
        type="text"
        placeholder="type here..."
        onChange={(e) => handleEmailInput(e)}
        value={email}
        required
      />
      {emailError && <h5>Email Error! Incorrect email entered</h5>}
      {linkSent && <h5>Success! A reset email link has been sent.</h5>}
      <div>
        <button className="buttons">Submit</button>
        <Link to="/login">
          <button className="buttons">Back to login</button>
        </Link>
      </div>
    </form>
  );
}

export default PasswordLink;