import React, { useEffect, useState, useRef } from "react";
import { createContext } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = "http://localhost:4000";

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = async () => {
    if (audioRef.current && !playStatus) {
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

  const playWithId = async (id) => {
    const selectedTrack = songsData.find(item => item._id === id);
    if (selectedTrack) {
      setTrack(selectedTrack);
    }
  };

  const previous = async () => {
    if (track) {
      const currentIndex = songsData.findIndex(item => item._id === track._id);
      if (currentIndex > 0) {
        const previousTrack = songsData[currentIndex - 1];
        setTrack(previousTrack);
      }
    }
  };

  const next = async () => {
    if (track) {
      const currentIndex = songsData.findIndex(item => item._id === track._id);
      if (currentIndex < songsData.length - 1) {
        const nextTrack = songsData[currentIndex + 1];
        setTrack(nextTrack);
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

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      if (response.data.songs.length > 0) {
        setTrack(response.data.songs[0]);
      }
    } catch (error) {
      console.error("Error fetching songs data:", error);
    }
  };

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumsData(response.data.albums);
    } catch (error) {
      console.error("Error fetching albums data:", error);
    }
  };

  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []);

  useEffect(() => {
    if (track && audioRef.current) {
      console.log('Setting audio source to:', track.audio);
      audioRef.current.src = track.audio;
      audioRef.current.load();
      // Start playback after setting the source
      const playAudio = async () => {
        try {
          await audioRef.current.play();
          setPlayStatus(true);
        } catch (error) {
          console.error('Play error:', error);
        }
      };
      playAudio(); // Ensure playback starts after setting the source
    }
  }, [track]);

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
  }, [audioRef]);

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
