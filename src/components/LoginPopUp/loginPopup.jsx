import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'

const loginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div> 
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:
                <>
                <input type="text"  placeholder='Your Name' required/>
                <input type="number" id="phone" name="phone" placeholder="+91 123-456-7890" inputmode="numeric" />
                </>
                }
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the term of use & privacy policy</p>
            </div>

            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>       
    </div>
  )
}

export default loginPopup
