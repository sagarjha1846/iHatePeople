import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="content">
        <div className="header flex">
          <h2>#Login</h2>
          <small>Sign in for getting started</small>
        </div>

        <div className="fields">
          <label>Email</label>
          <input type="email" placeholder="abc@xyz.com"></input>
        </div>
        <div className="fields">
          <label>Password</label>
          <input type="password"></input>
        </div>

        <div className="fields last">
          <p>
            Dont Remember Password <Link to="/forgot-password">Click Me</Link>
          </p>
        </div>

        <div className="fields">
          <button className="btn">Log In</button>
          <p>
            <span>Create An Account</span>
            <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
