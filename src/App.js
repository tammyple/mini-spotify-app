import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import Heading from "./components/Heading";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Container
        sx={{
          width: "400px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "70px",
          background: `linear-gradient(to right, #f0f2f0, #000c40)`,
        }}
        className="container"
      >
        <Heading />
        <TrackList />
        <Controller />
      </Container>
    </MusicPlayerProvider>
  );
};

export default App;
