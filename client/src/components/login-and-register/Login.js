import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  const { email, password } = inputs;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setInputs({ ...inputs, email: e.target.value.toLowerCase() });
    } else {
      setInputs({ ...inputs, password: e.target.value });
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (!email) {
      setEmailError(true);
    } else if (!password) {
      setEmailError(false);
      setPasswordError(true);
    } else {
      try {
        const body = { email, password };
        const response = await fetch("/authentication/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const parseRes = await response.json();
        setServerErrorMessage(parseRes);
        if (parseRes.jwtToken) {
          localStorage.setItem("token", parseRes.jwtToken);
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className="form">
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email.toLowerCase()}
          onChange={(e) => handleChange(e)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        {emailError && <p>Please enter your email</p>}
        {passwordError && <p>Please enter your password</p>}
        <p>{serverErrorMessage}</p>
        <div className="buttons">
          <button>Login</button>
        </div>
        <Link to="/register" className="form-link">
          Sign Up
        </Link>
      </form>
    </>
  );
}

export default Login;
