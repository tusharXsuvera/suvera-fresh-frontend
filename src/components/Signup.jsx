import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="popup_container">
      <h1>Signup</h1>
      <Link to="/login">
        <h3>Already have an account? Login</h3>
      </Link>
    </div>
  );
}
