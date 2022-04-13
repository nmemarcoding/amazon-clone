import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import{auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const navigate = useNavigate();
  const[email,setEmail] = useState(''); 
  const[password,setPassword] = useState('');

  const signIn = e=>{
      
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        if(userCredential){
            navigate('/')
          }
          
        }).catch(error=>alert(error.message));

  }

  const register = e=>{
      e.preventDefault();

      createUserWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
          console.log(auth);
          if(auth){
            navigate('/')
          }
      })
      .catch(error=>alert(error.message))
  }

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
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className="login__signInButton" onClick={signIn}>Sing In</button>
            </form>

            <p>
                By signing-in you agree to Amazon's
                Fake Clone Conditions of Use & Sale. Please entersee oure privacy
                Notince, our Cookies Notince and our Interest-based Ads 
                Notice.
            </p>
            <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
        </div>
    </div>
  )
}
