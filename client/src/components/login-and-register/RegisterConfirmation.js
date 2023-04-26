import React from "react";
import { Link } from "react-router-dom";

function RegisterConfirmation({ setAuth }) {
  return (
    <>
      <section>
        <h2>You have succesfully signed up</h2>
        <h3>
          Go to your{" "}
          <Link to="/dashboard" setAuth={setAuth}>
            Dashboard
          </Link>{" "}
        </h3>
      </section>
    </>
  );
}

export default RegisterConfirmation;
