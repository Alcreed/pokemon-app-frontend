import React from "react";
import { Link } from 'react-router-dom';

import './Login.css'

function Login() {
  return (
    <section className="login">
      <section className="login_container">
        <h2 className="login_title">Sign in</h2>
        <form className="login_container_form">
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn">Sign in</button>
        </form>

        <p className="login_container_register">Don't have an account?</p>
        <Link className="Register_link" to={'#'}>Sign up</Link>
      </section>
    </section>
  )
}

export default Login;