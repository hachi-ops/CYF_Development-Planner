import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Home from "./components/Home";
import Register from "./components/signupLogin/Register";
import Login from "./components/signupLogin/Login";
import Dashboard from "./components/dashboard/Dashboard";

import NoMatch from "./components/NoMatch";

import Message from "./components/mentor/Message";
// import Feedbacks from "./components/mentor/Feedbacks";

import NewMessages from "./components/mentor/NewMessages";

import SignupConfirmed from "./components/signupLogin/SignupConfirmed";
import Inbox from "./components/mentor/Inbox";
import Sent from "./components/mentor/Sent";
import Feedbacks from "./components/dashboard/Feedbacks";
import FeedbackDetails from "./components/mentor/FeedbackDetails";

import All from "./components/dashboard/All";
// import FeedbackDetails from "./components/mentor/FeedbackDetails";
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
          path="dashboard"
          element={
            isAuthenticated ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="signup-confirmed" element={<SignupConfirmed />} />
        <Route path="*" element={<NoMatch />} />

        <Route path="message" element={<Message />} />

        <Route path="inbox" element={<Inbox />}>
          <Route index element={<All />} />
          <Route path="all" element={<All />} />
          <Route path="sent" element={<Sent />} />
          <Route path="new" element={<NewMessages />} />
        </Route>
        <Route path="feedbacks" element={<Feedbacks />}>
          <Route path=":feedbackId" element={<FeedbackDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
