import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </Router>
  );
};

export default App;
