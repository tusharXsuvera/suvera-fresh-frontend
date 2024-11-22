import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="popup_container">
      <h1>Login </h1>
      <Link to="/signup">
        <h3>Don't have an account? Signup</h3>
      </Link>
    </div>
  );
}
