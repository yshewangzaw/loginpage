import React, { useState } from "react";
import "./LoginPage.css";
import "./WelcomePage.css";
const HomePage = ({ handleLogin }) => {
  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!credentials.email) {
      isValid = false;
      newErrors.email = "Email is required";
    }

    // Password validation
    if (!credentials.password) {
      isValid = false;
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 8) {
      isValid = false;
      newErrors.password = "Password must be at least 8 characters long";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(credentials.password)
    ) {
      isValid = false;
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)";
    }

    if (isValid) {
      // Perform authentication logic here
      // For simplicity, let's assume authentication is successful
      setIsLoggedIn(true);
    } else {
      setErrors(newErrors);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-page">
        <h2>Welcome!</h2>
        <p>You are now logged in.</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error danger">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error danger">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;