import React, { useState } from 'react'
import "./LoginForm.css"

function Login({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h1 id='login-head'>HELLO AGAIN!</h1>
            <h2>welcome back you've been missed</h2>
            {/* ERROR!  */}

            <div className="form-group">
                <input type="email" placeholder="Enter the email" name="email" id="email" />
            </div>

            <div className="form-group">
                <input type="password" placeholder="Enter the password" name="password" id='password'/>
            </div>

            <div className='signin-btn'>Sign in</div>

            <h3 class="hr-lines">OR</h3>

            <div className='alt-login'>
                <div className='google'></div>
                <div className='linkedin'></div>
            </div>

        </div>
    </form>
  )
}

export default Login
