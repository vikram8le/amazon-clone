import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import {auth} from './firebase'




function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
     e.preventDefault()
     //FIREBASE LOGIN STUFF

     auth
          .signInWithEmailAndPassword(email,password)
          .then(auth => {
            navigate('/')
          })
          .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
     //FIREBASE REGISTRATION STUFF

    auth   
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => { 
                  //it successfully created a new user with email and password
                  console.log(auth);
                  if (auth) {
                    navigate('/')
                  }
                })
                .catch(error => alert(error.message))
  }

  return (
    
    <div className='login'>
        
        <Link to='/'>
            <img 
              className="login_amazon_logo" 
              src= "https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
              alt= "" 
            />
        </Link>

        <div className= 'login_container'>
           <h1 className='sign_in_text'>Sign-In</h1>

           <form className='login_form'>
            <h5>
              E-mail
            </h5>
            
            <input type='text' 
              value={email} 
              onChange= {e => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input type="password" 
              value={password}
              onChange= {e => setPassword(e.target.value)}
            />
              
           </form>

          <button onClick= {signIn} 
          type= 'submit'
          className='sign_in_button'>Sign In</button>
        
          <p>
            By signing in, you agree that you eat a lot of Cookies and never really read the terms and conditions. 
          </p>

          <button onClick={register}>Create a New Account</button>

        </div >



    </div>

   

   

  )
}

export default Login