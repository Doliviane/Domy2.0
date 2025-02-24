import React from 'react';
import './connect.css';
import { FaUser, FaLock } from "react-icons/fa";

function LogIn() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login Page</h1>
        <label> Nom d'utilisateur:
          <input className="box" type="text" placeholder="username" required/>
          <FaUser className="icon" />
        </label>
        <br/>
        <label> Password
          <input  className="box" type="password" placeholder="password" required/>
          <FaLock className="icon" />
        </label>
        <br/>
        <div className="forgot">
          <label> <input className="box" type="checkbox" /> Remember me </label>
          <a href="#"> I forgot my Password</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p> Don't have an account?  <a href="#">Register</a> </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;