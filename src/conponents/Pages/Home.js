import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../HeroBanner";
import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");

  // console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
        setExercises={setExercises}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
