import React from 'react'
import "./Signup.css"


const Sigup = () => {
    return (
        <div>
            
            <div className="signupcontainer">
                <form className='singupform'>
                    <h2 className="welcometext">WELL COME</h2>
                    <h2 className="welcomesubtext">TO BOLETO</h2>
                    <div  >
                        <lable className="form-lable text-light">
                            Email</lable>
                        <input type="email"
                         className="form-control inputtype" placeholder='Email' />
                    </div>
                    <div className='mt-2'>
                        <lable className="form-lable text-light">
                            Password</lable>
                        <input type="password"
                         className="form-control inputtype " placeholder='Username' />
                    </div>
                    <div className='mt-2'>
                        <lable className="form-lable text-light">
                            Confirm Password </lable>
                        <input type="password"
                         className="form-control inputtype" placeholder='Password' />
                    </div>
                    <div className='butnn'>
                    <button className='button1'>Sign Up</button>
                    </div>
                    <div className='mt-3'>
                    <span className="loginText " htmlFor="">
                        Already have an account? 
                        <a className="loginLink" href="/login">
                            Login  </a>
                    </span>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Sigup