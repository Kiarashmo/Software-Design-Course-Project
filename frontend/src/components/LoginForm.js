import React, { useState } from 'react'

function Login({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* ERROR!  */}
            <div className="form-group">
                <label htmlFor='email'>Email: </label>
                <input type="email" placeholder="Enter the username" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id='password'/>
            </div>
            <input type="submit" value="Login" />
        </div>
    </form>
  )
}

export default Login
