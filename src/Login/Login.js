import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <div className="facebook-title">
            <div className="facebooktext">
                facebook
            </div>
            <div className="title">
                Facebook helps you connect and share <br></br> with the people in your life.
            </div>
        </div>
        <div className="login-container">
            <div className="login-detail">
                <input type="email" placeholder='Email address or phone number' />
                <br />
                <input type="Password" placeholder='Password' />
                <br />
                <button className='btn'>
                    <Link to="/Header">Login</Link>
                </button>
                <div className="forget">
                <a href="forget">Forgotten password?</a>
                <br />
             </div>
             </div>
             <div className="create">
                <br />
                <button className='btns'>
                    Create New Account
                </button>
             </div>
             <p></p>
             <br />
             <div className="page">
                <a href="createpage">Create a Page</a> for a celebrity, brand or business.
             </div>

         </div>
     </div>
  )
}

export default Login