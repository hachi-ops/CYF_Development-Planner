import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import GiveFeedback from "./components/GiveFeedback";
import NoMatch from "./components/NoMatch";
import InputFeedback from "./components/InputFeedback";
import ListFeedbacks from "./components/ListFeedbacks";
import MentorDash from "./components/MentorDash";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:4000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);
  return (
    <>
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
              <Navigate to="/login" />
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
        <Route path="*" element={<NoMatch />} />

        <Route path="give-feedback" element={<GiveFeedback />} />
        <Route path="/feedbacks" element={<InputFeedback />} />
        <Route path="/list-feedbacks" element={<ListFeedbacks />} />
        <Route path="mentor-dash" element={<MentorDash />} />
      </Routes>
    </>
  );
}

export default App;
