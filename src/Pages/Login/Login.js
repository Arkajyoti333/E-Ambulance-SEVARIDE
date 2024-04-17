import React, { useState } from 'react'
import './Login.css'
import user from '../../Assets/person.png'
import email from '../../Assets/email.png'
import lock from '../../Assets/password.png'
import mobile from '../../Assets/phone.png'

const Login=()=> {

    const [action,setAction] = useState("Login")
  return ( 
    <div className='container'>
        <div className='header'>
          <div className='signup'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input'>
            <img src={user} alt='user'/>
            <input type="text" className='inputBox' placeholder='Name'/>
          </div>}
          
          <div className='input'>
            <img src={mobile} alt='email'/>
            <input type="number" className='inputBox' placeholder='Mobile Number'/>
          </div>

          <div className='input'>
            <img src={email} alt='email'/>
            <input type="email" className='inputBox' placeholder='Email'/>
          </div>

          <div className='input'>
            <img src={lock} alt='password'/>
            <input type="password" className='inputBox'placeholder='Password'/>
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='fogot-password'>Forgot Password?<span>click here</span></div>}
        
        <div className='container-submit'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Log In</div>
        </div>
        
    </div>
  )
}
export default Login;
