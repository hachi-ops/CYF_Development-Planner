import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//styles
import "./styles/general.css";
import "./styles/navbar.css";
import "./styles/buttons.css";
import "./styles/form.css";
import "./styles/account.css";
import "./styles/home.css";
import "./styles/dashboard.css";

import "./styles/modal.css";

//components

import Login from "./components/login-and-register/Login";
import Register from "./components/login-and-register/Register";
import RegisterConfirmation from "./components/login-and-register/RegisterConfirmation";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import ResetLink from "./components/login-and-register/ResetLink";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      // /authentication/verify is an endpoint that triggers |./routes/jwtAuth.js|
      const response = await fetch("authentication/verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await response.json();

      // Could this be simpified to not need two calls to `setIsAuthenticated`?
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Home /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="register"
          element={
            !isAuthenticated ? (
              <Register setAuth={setAuth} />
            ) : (
              <Navigate to="/register-confirmation" />
            )
          }
        />
        <Route
          exact
          path="login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        <Route
          exact
          path="dashboard"
          element={
            isAuthenticated ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="register-confirmation"
          element={
            isAuthenticated ? (
              <RegisterConfirmation setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="reset-link" element={<ResetLink />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
