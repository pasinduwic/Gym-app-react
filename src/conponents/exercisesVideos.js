import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExercisesVideos = ({ exercisesVideos, name }) => {
  // console.log(exercisesVideos);

  // if (!exercisesVideos.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
        marginLeft: { lg: "40px" }
      }}
      p="20px"
    >
      <Typography
        mb="33px"
        sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" } }}
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}
      >
        {exercisesVideos.contents?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                color="#000"
                sx={{
                  typography: { lg: "h5", sm: "h6", xs: "h7" },
                  marginBottom: { lg: "20px", xs: "5px" }
                }}
              >
                {item.video.title}
              </Typography>
              <Typography
                color="#000"
                sx={{ typography: { lg: "h6", sm: "h7", xs: "h8" } }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
