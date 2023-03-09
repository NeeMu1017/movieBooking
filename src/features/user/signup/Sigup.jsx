import React from 'react'
import "./Signup.css"
import Navabar from '../../navbar/Navabar'

const Sigup = () => {
    return (
        <div>
            <Navabar />
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
                         className="form-control inputtype" placeholder='Username' />
                    </div>
                    <div className='mt-2'>
                        <lable className="form-lable text-light">
                            Confirm Password </lable>
                        <input type="password"
                         className="form-control inputtype" placeholder='Password' />
                    </div>
                    <div className='mt-3'>
                    <button className='btn btn-primary  form-control'>Loing</button>
                    <span className="loginText text-light " htmlFor="">
                        Already have an account?  &nbsp;&nbsp;
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