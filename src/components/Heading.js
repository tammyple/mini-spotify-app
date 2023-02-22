import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import { Box, Typography } from "@mui/material";

function Heading() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <>
      <Box
        className="heading"
        sx={{
          height: "80px",
          width: "400px",
          borderRadius: "70px 70px 0px 0px",
          spacing: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
        <Typography color="text.primary">{currentTrackName}</Typography>
      </Box>
    </>
  );
}

export default Heading;
