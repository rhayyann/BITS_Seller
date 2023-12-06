import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <section className="login-section">
            <div className="login-container">
                <div className="content-left">
                    <form action="#" className="login-form">
                        <h1>LOGIN</h1>
                        <div className="login-input">
                            <input type="username" placeholder='Username'/>
                            <input type="password" placeholder='Password' />
                            <button>LOGIN</button>
                        </div>
                        <p className='option-label'>OR</p>
                        <div className="login-google">
                            <p>Google</p>
                            <img src="google.png" alt="" />
                        </div>
                    </form>
                </div>
                <div className="content-right">
                    <h1>CREATE AN ACCOUNT</h1>
                    <p>It's easy. Enter your email address, fill in the form on the next page and enjoy the benefits of getting an account.</p>
                    <button onClick={()=>navigate("/register")}>REGISTER</button>
                </div>
            </div>
        </section>
    )
}

export default Login
