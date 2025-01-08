import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle email/password signup
  const handleSignup = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    try {
      const response = await axios.post("/api/auth/signup", { email, password });
      localStorage.setItem("token", response.data.token);
      console.log("Signup success:", response.data);
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
    }
  };

  // Handle Google login success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const response = await axios.post("/api/auth/google", { token });
      localStorage.setItem("token", response.data.token);
      console.log("Google signup success:", response.data);
    } catch (error) {
      console.error(
        "Google signup error:",
        error.response?.data?.message || error.message
      );
    }
  };

  // Handle Google login failure
  const handleGoogleError = () => {
    console.error("Google signup failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen">
        {/* Spotify Logo */}
        <header className="flex items-center justify-center mb-6 mt-6">
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.spotify_logo}
              alt="Spotify Logo"
              className="h-12"
            />
          </a>
        </header>

        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Sign up to start <br />
          listening
        </h1>

        {/* Email Input Section */}
        <div>
          <label htmlFor="email" className="block text-left text-white mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
            placeholder="name@domain.com"
            required
          />
          <a href="#use-phone" className="text-green-500 text-sm underline">
            Use phone number instead.
          </a>
          <label htmlFor="password" className="block text-left text-white mt-4">
            Password (optional)
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 text-white"
            placeholder="Enter a password"
          />
          <button
            onClick={handleSignup}
            className="w-80 px-3 py-3 bg-green-600 text-black font-bold rounded-full mt-4"
          >
            Next
          </button>
        </div>

        {/* Divider */}
        <div className="mt-7">
          <span className="text-gray-400">or</span>
        </div>

        {/* Social Media Buttons */}
        <div className="flex flex-col items-center">
          {/* Google Button */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Logo"
                  className="text-2xl mr-3"
                />
                <span className="flex-grow text-center">Sign up with Google</span>
              </button>
            )}
          />

          {/* Facebook Button */}
          <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center">
            <FaFacebook className="text-2xl mr-3 ml-3 text-blue-400" />
            <span className="flex-grow text-center">Sign up with Facebook</span>
          </button>

          {/* Twitter Button */}
          <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 mb-8 flex items-center">
            <FaTwitter className="text-2xl mr-3 ml-3 text-blue-500" />
            <span className="flex-grow text-center">Sign up with Twitter</span>
          </button>
        </div>

        {/* Footer */}
        <hr className="w-80 border-gray-100 mb-4" />
        <div className="flex col-span-8 space-x-1 mt-4">
          <a className="text-white" href="/login">
            Already have an account?
          </a>
          <a className="text-white underline" href="/login">
            Login here.
          </a>
        </div>
        <p className="text-gray-400 text-sm text-center mt-4 mb-4">
          This site is protected by reCAPTCHA and the Google <br />
          <a href="#" className="text-white underline mb-4">
            Privacy Policy
          </a>{" "}
          and
          <a href="#" className="text-white underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
