import React, { useEffect, useState, useRef } from "react";
import { createContext } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  // Flag to check if user has interacted
  const [userInteracted, setUserInteracted] = useState(false);

  // Handle user interaction to allow autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [userInteracted]);

  const play = async () => {
    if (audioRef.current && userInteracted) {
      try {
        await audioRef.current.play();
        setPlayStatus(true);
      } catch (error) {
        console.error('Play error:', error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current && playStatus) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    const selectedTrack = songsData.find(item => item._id === id);
    if (selectedTrack) {
      setTrack(selectedTrack);
    }
  };

  const previous = () => {
    if (track) {
      const currentIndex = songsData.findIndex(item => item._id === track._id);
      if (currentIndex > 0) {
        setTrack(songsData[currentIndex - 1]);
      }
    }
  };

  const next = () => {
    if (track) {
      const currentIndex = songsData.findIndex(item => item._id === track._id);
      if (currentIndex < songsData.length - 1) {
        setTrack(songsData[currentIndex + 1]);
      }
    }
  };

  const seekSong = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration;
    }
  };

  // Fetch songs and albums data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsResponse = await axios.get("http://localhost:4000/api/song/list");
        setSongsData(songsResponse.data.songs);
        if (songsResponse.data.songs.length > 0) {
          setTrack(songsResponse.data.songs[0]);
        }

        const albumsResponse = await axios.get("http://localhost:4000/api/album/list");
        setAlbumsData(albumsResponse.data.albums);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle track changes
  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.audio;
      audioRef.current.load();
      if (playStatus) {
        play(); // Play the audio if playStatus is true
      }
    }
  }, [track, playStatus]);

  // Update seek bar and time
  useEffect(() => {
    const updateSeekBar = () => {
      if (audioRef.current && seekBar.current) {
        seekBar.current.style.width =
          Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      }
    };

    if (audioRef.current) {
      audioRef.current.ontimeupdate = updateSeekBar;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
