import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="content">
        <div className="header flex">
          <h2>#SignUp</h2>
          <small>Sign in for getting started</small>
        </div>

        <div className="fields">
          <label>First Name</label>
          <input type="text" placeholder="sagar"></input>
        </div>
        <div className="fields">
          <label>Last Name</label>
          <input type="text" placeholder="Jha"></input>
        </div>
        <div className="fields">
          <label>UserName</label>
          <input type="text" placeholder="@abCXyZ"></input>
        </div>
        <div className="fields">
          <label>Email</label>
          <input type="email" placeholder="abc@xyz.com"></input>
        </div>
        <div className="fields">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="fields">
          <label>Confirm Password</label>
          <input type="password"></input>
        </div>
        <div className="fields">
          <button className="btn">Sign In</button>
          <p>
            <span>Already Have An Account</span>
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
