import React from "react";

import "./Signin.css"

function Signin(){
    return(
        <div>
            
        <div className="signupcontainer">
            <form className='singupform'>
                <h2 className="welcometext">Hello</h2>
                <h2 className="welcomesubtext">WELCOME BACK</h2>
                <div className="inputdiv"  >
                    <lable className="form-lable text-light">
                        EMAIL</lable>
                    <input type="email"
                     className="form-control inputtype" placeholder='Email' />
                </div>
                <div className='inputdiv'>
                    <lable className="form-lable text-light">
                        PASSWORD</lable>
                    <input type="password"
                     className="form-control inputtype " placeholder='Password' />
                </div>
                <div >
                    
                    <input type="checkbox" className="form-check-input mt-3" />
                    <label className="form-check-label  "> Remember password</label>
                    <a href="" className="froget" >Forget Password</a>
                   


                </div>
               
                <div className='butnn'>
                <button className='button1'>LOG IN</button>
                </div>
                <div className='mt-3'>
                <span className="loginText " htmlFor="">
                    Don't have an Account?
                    <a className="loginLink" href="/login">
                        Login  </a>
                </span>
                </div>
            </form>

        </div>
    </div>
    )
}

export default Signin;