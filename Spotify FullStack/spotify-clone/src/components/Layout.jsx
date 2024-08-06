import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import Sidebar from './Sidebar';
import Display from './Display';
import { PlayerContext } from '../context/PlayerContext';
import Player from './Player';

const Layout = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const location = useLocation(); // Get the current location

  // Determine if the current path is the sign-up or login page
  const isAuthPage = location.pathname === '/sign-up' || location.pathname === '/login';

  return (
    <div className="h-screen bg-black">
      {!isAuthPage && songsData.length !== 0 && (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      )}
      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload="auto"
      ></audio>
    </div>
  );
};

export default Layout;
