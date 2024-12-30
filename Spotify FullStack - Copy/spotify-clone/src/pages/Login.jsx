import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { assets } from "../assets/assets";
import axios from "axios";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      const response = await axios.post("/api/auth/google", { token });
      localStorage.setItem("token", response.data.token);
      alert("Google Login successful!");
    } catch (error) {
      alert("Google Login failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <header className="flex items-center justify-center mb-4 mt-4">
        <img src={assets.spotify_logo} alt="Spotify Logo" />
      </header>
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Login to Spotify
      </h1>

      <div className="flex flex-col items-center">
        <button
          onClick={handleGoogleLogin}
          className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center"
        >
          <FcGoogle className="text-2xl mr-3 ml-3" />
          <span className="flex-grow text-center">Sign up with Google</span>
        </button>
      </div>

      <hr className="w-80 border-gray-100 mb-10 mt-4" />

      <form onSubmit={handleEmailLogin}>
        <div>
          <p className="text-left text-white mb-2">Email or username</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
            type="text"
            placeholder="Email or username"
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
        </div>
        <div className="mb-4 mt-8">
          <button className="w-80 px-3 py-3 bg-green-600 text-black font-bold rounded-full mt-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
