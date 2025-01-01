import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { assets } from "../assets/assets";
import axios from "axios";
import { signInWithGoogle } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", { email, password });
      alert("Signup successful! Please login.");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      const response = await axios.post("/api/auth/google", { token });
      alert("Google Signup successful!");
    } catch (error) {
      alert("Google Signup failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <header className="flex items-center justify-center mb-4 mt-4">
        <img src={assets.spotify_logo} alt="Spotify Logo" />
      </header>
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Sign up to start <br />
        listening
      </h1>

      <form onSubmit={handleEmailSignup}>
        <div>
          <p className="text-left text-white mb-2">Email address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
            type="email"
            placeholder="name@domain.com"
            required
          />
          <p className="text-left text-white mb-2">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
            type="password"
            placeholder="Password"
            required
          />
          <button className="w-80 px-3 py-3 bg-green-600 text-black font-bold rounded-full mt-4">
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-7">
        <span>or</span>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleGoogleSignup}
          className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center"
        >
          <FcGoogle className="text-2xl mr-3 ml-3" />
          <span className="flex-grow text-center">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
