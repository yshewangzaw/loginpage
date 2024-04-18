import React from 'react';
import './App.css';
import logo from './image/logo.jpg';
const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-container">
        
      <button className="google"> <img src="./image/logo.jpg" alt="" />
        <span className="login-text">Login with Google</span></button>
     </div>
      <div className="divider-container">
        <hr className="divider" />
        <span className="divider-text">or</span>
        <hr className="divider" />
      </div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input type="text" id="username" placeholder="@moonlight21" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder=".........." />
        </div>
        <p className="forgot-password">Forgot password?</p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;