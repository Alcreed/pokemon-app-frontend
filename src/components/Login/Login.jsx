import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";

import './Login.css'

function Login() {
  
  const cookies = new Cookies();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');
  
  const baseUrl = 'http://localhost:3001/users';

  useEffect(() => {
    if (cookies.get('email')) {
      window.location.href = "./home"
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signIn = async (e) => {
    e.preventDefault();

    await axios.get(baseUrl, {params: { email: loginData.email, password: loginData.password }})
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          let result = response[0];
          
          cookies.set('email', result.email, {path: '/'});
          window.location.href="./home"
        } else {
          setErrorMessage(`The email or password don't match. Try again`);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <section className="login">
      <section className="login_container">
        <h2 className="login_title">Sign in</h2>
        <form className="login_container_form">
          <input 
            className="input" 
            type="text" 
            placeholder="Email" 
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value})}
          />
          <input 
            className="input" 
            type="password" 
            placeholder="Password" 
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value})}
          />

          <button className="btn" onClick={(e) => signIn(e)}>Sign in</button>
          
          <div className="loginErrorMessage">
            <p className="loginErrorMessage_text">{errorMessage}</p>
          </div>
        </form>

        <p className="login_container_register">Don't have an account?</p>
        <Link className="Register_link" to={'#'}>Sign up</Link>
      </section>
    </section>
  )
}

export default Login;