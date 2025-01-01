import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Layout from "./components/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className="h-screen-90% bg-black">
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div>
          <Layout />
        </div>
      </div>
    </>
  );
};

export default App;
