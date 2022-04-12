import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <Link to='/'>
            <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
                    className="login__logo" alt=""></img>
        </Link>

        <div className="login__container">
            <h1>sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'/>

                <h5>Password</h5>
                <input type='password'/>

                <button className="login__signInButton">Sing In</button>
            </form>

            <p>
                By signing-in you agree to Amazon's
                Fake Clone Conditions of Use & Sale. Please entersee oure privacy
                Notince, our Cookies Notince and our Interest-based Ads 
                Notice.
            </p>
            <button className="login__registerButton">Create your Amazon account</button>
        </div>
    </div>
  )
}
