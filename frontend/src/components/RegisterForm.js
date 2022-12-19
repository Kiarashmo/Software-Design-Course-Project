import React from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  return (
    <div>
      <form>
        <div className="register-form-inner">
          <h1 className="register-h1">Register</h1>
          {/* ERROR!  */}
          <div className="register-form-group">
            <input
              className="register-form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="register-form-group">
            <input
              className="register-form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="register-form-group">
            <input
              className="register-form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="register-form-group">
            <input
              className="register-form-input"
              type="re-password"
              name="re-password"
              placeholder="Reenter your password"
            />
          </div>
          <div className="register-form-group">
            <input className="register-btn" type="submit" value="Register" />
          </div>
          <div className="register-form-divider">
            <h3 className="register-hr-lines register-h3">OR</h3>
            <div className="alt-register">
              <button className="google"></button>
              <button className="linkedin"></button>
            </div>
          </div>
          <div className="back-to-login">
            <h4 className="register-h4">
              Already have an account? <a>Sign in</a>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
}
