import React, { useState } from "react";
import Track1 from "../data/track1.mp3";
import Track2 from "../data/track2.mp3";
import Track3 from "../data/track3.mp3";
import Track4 from "../data/track4.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Weeknds - Day Fox",
      file: Track1,
    },
    {
      name: "Good Vibes - AlexiAction",
      file: Track2,
    },
    {
      name: "Whip - prazkhanal",
      file: Track3,
    },
    {
      name: "Sunshine - lemonmusicstudio",
      file: Track4,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
