import React, { useState } from "react";
import "./LoginForm.css";

function Login() {
  // const [details, setDetails] = useState({name: "", email: "", password: ""});

  // const submitHandler = e => {
  //     e.preventDefault();

  //     Login(details);
  // }
  return (
    <form>
      <div className="login-form-inner">
        <h1 className="login-h1">HELLO AGAIN!</h1>
        <h2 className="login-h2">welcome back you've been missed</h2>
        {/* ERROR!  */}

        <div className="login-form-group">
          <input
            className="login-form-input"
            type="email"
            name="email"
            placeholder="Enter the email"
          />
        </div>

        <div className="login-form-group">
          <input
            className="login-form-input"
            type="password"
            placeholder="Enter the password"
            name="password"
          />
        </div>
        <div class="forgot-pass">
          <a>Forgot Password?</a>
        </div>
        <div className="login-form-group">
          <input className="login-btn" type="submit" value="Sign in" />
        </div>

        <h3 className="login-hr-lines login-h3">OR</h3>

        <div className="alt-login">
          <button className="google"></button>
          <button className="linkedin"></button>
        </div>
        <div className="back-to-register">
          <h4 className="login-h4">
            Not a member? <a>Register Now</a>
          </h4>
        </div>
      </div>
    </form>
  );
}

export default Login;
