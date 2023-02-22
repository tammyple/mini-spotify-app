import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Stack from "@mui/material/Stack";

function TrackList() {
  const { isPlaying, trackList, currentTrackIndex, playTrack } =
    useMusicPlayer();

  return (
    <>
      <div className="track-list">
        <Stack spacing={2}>
          {trackList.map((track, index) => (
            <Box
              key={index}
              sx={{
                height: "80px",
                borderRadius: "20px",
                spacing: 10,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                background: `linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
              }}
            >
              <Button
                sx={{ display: "inline-block" }}
                onClick={() => playTrack(index)}
              >
                {isPlaying && currentTrackIndex === index ? (
                  <HeadphonesIcon />
                ) : (
                  <PauseCircleIcon />
                )}
              </Button>

              <Typography className="song-title">{track.name}</Typography>
            </Box>
          ))}
        </Stack>
      </div>
    </>
  );
}

export default TrackList;
