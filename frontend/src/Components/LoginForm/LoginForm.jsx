// LoginForm.js
import React from 'react';
import Navbar from '../../navbar';
import './style.css'; // Import the CSS file

const LoginForm = () => {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
