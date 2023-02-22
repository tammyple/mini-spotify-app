import { Box, Button } from "@mui/material";
import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import useMusicPlayer from "../hooks/usePlayerProvider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Controller() {
  const {
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    currentTrackIndex,
    currentTrackName,
    playTrack,
  } = useMusicPlayer();

  const togglePlayController = () => {
    currentTrackIndex ? playTrack(currentTrackIndex) : playTrack(0);
    console.log(currentTrackIndex);
  };

  return (
    <>
      <div className="controller">
        <Box
          sx={{
            height: "80px",
            width: "400px",
            borderRadius: "0px 0px 70px 70px",
            spacing: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          }}
        >
          <IconButton
            aria-label="previous"
            size="large"
            onClick={playPreviousTrack}
          >
            <SkipPreviousIcon />
          </IconButton>

          <IconButton onClick={togglePlayController}>
            {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
          </IconButton>

          <IconButton onClick={playNextTrack}>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
}

export default Controller;
