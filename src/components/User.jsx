import React from "react";
import "../css/User.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyOtp from "../pages/VerifyOtp";
import ForgotPass from "../pages/ForgotPass";
export default function User() {
  return (
    <div className="login_signup__container">
      <div className="login_signup__bg"></div>
      <div className="popup flex_column">
        <h1 className="popup_heading">
          Meat Your Expectations - Fresh, Juicy, and Delicious.
        </h1>
        {window.location.pathname === "/login" && <Login />}
        {window.location.pathname === "/signup" && <Signup />}
        {window.location.pathname === "/verify-otp" && <VerifyOtp />}
        {window.location.pathname === "/forgot-password" && <ForgotPass />}
      </div>
    </div>
  );
}
