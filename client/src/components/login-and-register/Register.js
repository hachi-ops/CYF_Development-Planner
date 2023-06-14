import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ setAuth }) {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { fname, lname, username, email, password, role } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const userDetailsCheck = async () => {
    try {
      const body = { username, email };
      const response = await fetch("/authentication/validUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      
      if (result.e_mail && result.name) {
        return true;
      } else {
        setNameError(!result.name);
        setEmailError(!result.e_mail);
        return false;
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    const correctInputs = await userDetailsCheck();

    if (correctInputs) {
      try {
        const lowerEmail = email.toLowerCase();
        const body = {
          fname,
          lname,
          username,
          email: lowerEmail,
          password,
          role,
        };
        const response = await fetch("/authentication/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const parseRes = await response.json();
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className="form">
        <h1>Register</h1>

        <fieldset>
          <legend>Your CYF role:</legend>

          <label htmlFor="student">
            trainee{" "}
            <input
              id="student"
              type="radio"
              name="role"
              value="student"
              onChange={(e) => handleChange(e)}
              required
            />
          </label>

          <label htmlFor="mentor">
            mentor{" "}
            <input
              id="mentor"
              type="radio"
              name="role"
              value="mentor"
              onChange={(e) => handleChange(e)}
            ></input>
          </label>
        </fieldset>
        <label htmlFor="fname">first name</label>
        <input
          id="fname"
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="lname">last name</label>
        <input
          id="lname"
          type="text"
          name="lname"
          value={lname}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
          required
          minLength="3"
        />
        {nameError && (
          <h5 className="error-message">
            This username is already being used!
          </h5>
        )}
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          required
          minLength="3"
        />

        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          required
        />
        {emailError && (
          <h5 className="error-message">
            We’re sorry. This login email already exists.
          </h5>
        )}
        <div className="buttons">
          <button>submit</button>
        </div>
        <Link to="/login" className="form-link">
          Login
        </Link>
      </form>
    </>
  );
}

export default Register;
