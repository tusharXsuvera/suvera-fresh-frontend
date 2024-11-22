import React from "react";
import "../css/User.css";
import Login from "../components/Login";
import Signup from "../components/Signup";
export default function User() {
  return (
    <div className="login_signup__container">
      <div className="login_signup__bg"></div>
      <div className="popup ">
        <h1 className="popup_heading">
          Meat Your Expectations - Fresh, Juicy, and Delicious.
        </h1>
        {window.location.pathname === "/login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
}
