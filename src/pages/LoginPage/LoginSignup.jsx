import React, { useState } from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
// import gradient_img from '../Assets/greengradient.jpg'

export const LoginSignup = () => {
    const [action,setAction] = useState("Login");

  return (
    
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt=''/>
            <input type='text'placeholder='Name'/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt=''/>
            <input type='email'placeholder='E-mail ID'/>
        </div>
        <div className="input">
            <img src={password_icon } alt=''/>
            <input type='password' placeholder='Password'/>
        </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
        <div className="submit-container">
            <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action==="Sign Up"? "submit gray":"submit"}onClick={()=>{setAction('Login')}}>Login</div>

        </div>
    </div>
  )
  
}
