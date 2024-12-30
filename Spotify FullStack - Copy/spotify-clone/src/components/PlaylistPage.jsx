import React, { useState } from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const PlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    // Handle playlist creation logic here
    console.log("Playlist created:", playlistName);
    // You can also make an API call here to save the playlist
  };

  return (
    <>
      <Navbar hideSections={true} />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={assets.playlist} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">name</h2>
          <h4>Desc</h4>
          <p className="mt-1 flex items-center gap-2">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            1,321,234 Likes
            <b>50 Songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hiddden sm:block">Data Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
    </>
  );
};

export default PlaylistPage;
