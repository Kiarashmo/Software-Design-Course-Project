import React from 'react'

export default function RegisterForm() {
  return (
    <div>
      <form>
        <div className='form-inner'>
            <h2>Register</h2>
            {/* ERROR!  */}
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id='password'/>
            </div>
            <div className="form-group">
                <label htmlFor='re-password'>Re-Enter Password: </label>
                <input type="re-password" name="re-password" id='re-password'/>
            </div>
            <input type="submit" value="Register" />
        </div>
    </form>
    </div>
  )
}
