import React from "react";
import { Link } from "react-router-dom";

function LoginSignInButtons() {
  return (
    <>
      <div className="login-register-buttons buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
}

export default LoginSignInButtons;
