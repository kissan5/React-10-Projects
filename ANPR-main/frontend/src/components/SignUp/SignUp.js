import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message before validation

    // Trim whitespace and validate input
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    console.log("Password:", trimmedPassword);
    console.log("Confirm Password:", trimmedConfirmPassword);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Invalid email format");
      return;
    }

    if (trimmedPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
        confirmPassword: trimmedConfirmPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      // Successfully registered
      navigate("/signin");
    } else {
      // Display error message
      setError(result.message || "Email Already Exists!");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 rounded">
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-muted">Already have an account? </span>
          <Link to="/signin" className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
