import React from "react";
import { assets } from "../assets/assets";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <header className="flex items-center justify-center mb-4 mt-4">
        <img src={assets.spotify_logo} alt="Spotify Logo" />
      </header>
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Sign up to start <br />
        listening
      </h1>

      <div>
        <p className="text-left text-white mb-2">Email address</p>
        <input
          className="w-80 bg-transparent border border-gray-300 rounded px-3 py-3 mb-2 text-white"
          type="text"
          placeholder="name@domain.com"
          required
        />
        <a href="#">
          <p className="text-green-500 text-sm underline ">
            Use phone number instead.
          </p>
        </a>
        <button className="w-80 px-3 py-3 bg-green-600 text-black font-bold rounded-full mt-4">
          Next
        </button>
      </div>

      <div className="mt-7">
        <span>or</span>
      </div>
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

      <hr className="w-80 border-gray-100 mb-4" />

      <div className="flex col-span-8 space-x-1 mt-4">
        <a className="text-white" href="">
          Already have an account?
        </a>
        <a className="text-white underline " href="">
          Login here.
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

export default Signup;
