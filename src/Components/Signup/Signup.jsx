import React from "react";
import Logo from "../Logo/Logo";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      <Logo />

      <div className="signup-form">
        <h1 id="main-heading">
          <span id="first-letter">S</span>ign up
        </h1>
        <p>
          Sign up and order your favorite food from your favorite restaurants
        </p>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
