import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const handleGoogleLogin = () => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: handleCredentialResponse,
    });

    google.accounts.id.prompt(); // Show the one-tap prompt (optional)
  };

  const handleCredentialResponse = async (response) => {
    try {
      // Send the Google token to your backend for verification
      const res = await axios.post("/api/auth/google", {
        id_token: response.credential,
      });

      // Save token to local storage
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("Google login failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    // Load the Google API script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = handleGoogleLogin;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="text-2xl mr-3 ml-3" />
          <span className="flex-grow text-center">Sign up with Google</span>
        </button>

        <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 flex items-center">
          <FaFacebook className="text-2xl mr-3 ml-3 text-blue-400" />
          <span className="flex-grow text-center">Sign up with Facebook</span>
        </button>

        <button className="w-80 px-3 py-3 bg-transparent border border-gray-300 text-white font-medium rounded-full mt-4 mb-8 flex items-center justify-center">
          <FaTwitter className="text-2xl mr-3 ml-3 text-blue-500" />
          <span className="flex-grow text-center">Sign up with Twitter</span>
        </button>
      </div>

      <hr className="w-80 border-gray-100 mb-10 mt-4" />

      {/* Other form fields and buttons */}
    </div>
  );
};

export default Login;
