import React from 'react'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
  return (
    <section className="register-section">
        <div className="register-container">
            <div className="content-left">
                <form action="#" className="register-form">
                    <h1>REGISTER</h1>
                    <div className="register-input">
                        {/* <input type="username" placeholder='Username'/> */}
                        <h3>YOUR NAME</h3>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="text" placeholder='Phone Number' />
                        <h3>LOGIN DETAILS</h3>
                        <input type="email" placeholder='Email Address' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <p></p>
                        <button>REGISTER</button>
                    </div>
                    <p className='option-label'>OR</p>
                    <div className="register-google">
                        <p>Google</p>
                        <img src="google.png" alt="" />
                    </div>
                </form>
            </div>
            <div className="content-right">
                <h1>BACK TO LOGIN</h1>
                <button onClick={()=>navigate("/login")}>LOGIN</button>
            </div>
        </div>
    </section>
  )
}

export default Register
