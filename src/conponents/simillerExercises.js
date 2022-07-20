import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollbar from "../conponents/HorizontalScrollbar";
import Loader from "./Loader";

const SimillerExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        textTransform="capitalize"
        sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" }, padding: "10px" }}
        mb="20px"
        ml="20px"
      >
        Exercises that target the same{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          muscle group
        </span>{" "}
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mr="40px">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        textTransform="capitalize"
        sx={{
          typography: { lg: "h3", sm: "h4", xs: "h5" },
          padding: "10px",
          marginTop: { lg: "100px" }
        }}
        mb="20px"
        ml="20px"
      >
        Exercises that uses the same{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mr="40px">
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimillerExercises;
