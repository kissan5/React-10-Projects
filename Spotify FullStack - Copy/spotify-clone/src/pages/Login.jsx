import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import axios from "axios";

const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  
  const handleSubmit = async (e) => {
e.preventDefault();

try {
  const response = await axios.post('/api/auth/login', {email, password});
  localStorage.setItem('token', response.data.token);
} catch (error) {
  console.error('Error logging in', error.response?.data?.message || error.message);
}
  }


  return (
    <div className="flex flex-col items-center p-4">
      <header className="flex items-center justify-center mb-4 mt-4">
        <img src={assets.spotify_logo} alt="Spotify Logo" />
      </header>
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Login to Spotify
      </h1>

      <div className="flex flex-col items-center">
        <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center">
          <FcGoogle className="text-2xl mr-3 ml-3" />
          <span className="flex-grow text-center">Sign up with Google</span>
        </button>

        <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center">
          <FaFacebook className="text-2xl mr-3 ml-3 text-blue-400" />{" "}
          {/* Facebook icon */}
          <span className="flex-grow text-center">
            Sign up with Facebook
          </span>{" "}
          {/* Text centered */}
        </button>

        <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 mb-8 flex items-center justify-center">
          <FaTwitter className="text-2xl mr-3 ml-3 text-blue-500" />
          <span className="flex-grow text-center">Sign up with Twitter</span>
        </button>
      </div>

      <hr className="w-80 border-gray-100 mb-10 mt-4" />

      <div>
        <p className="text-left text-white mb-2">Email or username</p>
        <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
          className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
          type="text"
          placeholder="Email or username"
          required
        />
        <p className="text-left text-white mb-2">Password</p>
        <input
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
          className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
          type="text"
          placeholder="Password"
          required
        />
      </div>
      <div className="mb-4 mt-8">
        <button className="w-80 px-3 py-3 bg-green-600 text-black font-bold rounded-full mt-2">
          Login
        </button>
      </div>

      <div className="flex col-span-8 space-x-1 mt-4">
        <a className="text-white" href="">
          Already have an account?
        </a>
        <a className="text-white underline" href="">
          Signup here.
        </a>
      </div>
      <p className="text-gray-400 text-sm text-center mt-4 mb-4">
        This site is protected by reCAPTCHA and the Google <br />
        <a href="#" className="text-white underline mb-4">
          {" "}
          Privacy Policy
        </a>{" "}
        and
        <a href="#" className="text-white underline">
          {" "}
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
};

export default Login;