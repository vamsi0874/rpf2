import React from 'react'
import { Link } from 'react-router-dom'
import src from "../logo/scr.jpg"
import badge from "../logo/badge.png"


export const Login = () => {
  return (
    <>
    <div className='body'>
       <header class="headerlog">
        <img class="scr" src={src}/>
        <h2 class="logo">South Central Railway</h2>
        <img class="badge" src={badge}/>
    </header>
    <div class="wrapper">
     <div class="form-box login">
       
        <h2>Login</h2>
    <form action="main.html"> 
        <div class="input-box">
            <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
            <input type="text" name="name" id="name" required/>
            <label for="name">Username</label>
        </div>  

        <div class="input-box">
            <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input type="password" name="name" id="password" required/>
            <label for="name">password</label>
        </div>

        <div class="role">
            <label class="authority">Authority :</label>
            <select class="select" >
                <option disabled selected>Select</option>
                <option>DI</option>
                <option>IPF</option>
            </select>
        </div>  

        <div class="remember-forgot">
             <label><input type="checkbox"/> Remember me</label>
             <Link to="#">Forgot Password?</Link>
        </div>
        <div class="buttonss">
            <button class="btns">
                <Link to="/"><span class="">login</span></Link>
            </button>
           
           </div>

      </form>  
    </div> 

  </div> 
 </div>
</>
  )
}
