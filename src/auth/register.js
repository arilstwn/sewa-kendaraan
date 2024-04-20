import React, { useState } from 'react';
import './css/register.css';

// import email from '../asset/email.png'
// import password from '../asset/password.png'
// import user from '../asset/user.png'

const Register = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>: <div className='input'>
                    <img src="{user}" alt="" />
                    <input type="text" placeholder='Name' />
                </div>}
                <div className='input'>
                    <img src="{email}" alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className='input'>
                    <img src="{password}" alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Regaiter"?<div></div>: <div className='forgot-password'>Lost password? <span>Click Here!</span></div>}
            <div className='submit-container'>
                <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("Regaiter")}}>Regaiter</div>
                <div className={action==="Regaiter"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}

export default Register;
