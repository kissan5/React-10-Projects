import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  // console.log("albumsData:", albumsData);
  // console.log("songsData:", songsData);

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Features Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <div key={index}>
              <AlbumItem
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hit</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
