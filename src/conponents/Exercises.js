import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = (props) => {
  // console.log("exercises ");

  const [currentPage, setCurrentPAge] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFristExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = props.exercises.slice(
    indexOfFristExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [
        {
          bodyPart: "cardio",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0798.gif",
          id: "0798",
          name: "stationary bike walk",
          target: "cardiovascular system"
        },
        {
          bodyPart: "cardio",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0798.gif",
          id: "0798",
          name: "stationary bike walk",
          target: "cardiovascular system"
        },
        {
          bodyPart: "cardio",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0798.gif",
          id: "0798",
          name: "stationary bike walk",
          target: "cardiovascular system"
        },
        {
          bodyPart: "chest",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
          id: "3294",
          name: "archer push up",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
          id: "0009",
          name: "assisted chest dip (kneeling)",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "assisted",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1716.gif",
          id: "1716",
          name: "assisted seated pectoralis major stretch with stability ball",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2364.gif",
          id: "2364",
          name: "assisted wide-grip chest dip (kneeling)",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1254.gif",
          id: "1254",
          name: "band bench press",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0989.gif",
          id: "0989",
          name: "band one arm twisting chest press",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1254.gif",
          id: "1254",
          name: "band bench press",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0989.gif",
          id: "0989",
          name: "band one arm twisting chest press",
          target: "pectorals"
        }
      ];

      // console.log(`https://exercisedb.p.rapidapi.com/exercises/bodypart/${props.bodyPart}`);
      // if (props.bodyPart === "allll") {
      //   exercisesData = await fetchData(
      //     "https://exercisedb.p.rapidapi.com/exercises ",
      //     exerciseOptions
      //   );
      // } else {
      //   exercisesData = await fetchData(
      //     `https://exercisedb.p.rapidapi.com/exercises/bodypart/${props.bodyPart}`,
      //     exerciseOptions
      //   );
      // }

      props.setExercises(exercisesData);
    };
    // console.log("exercises ");
    // console.log(props.exercises);
    fetchExercisesData();
  }, [props.bodyPart]);

  const paginate = (e, value) => {
    setCurrentPAge(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography mb="46px" ml="46px">
        <h1>Showing Results</h1>
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {props.exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(props.exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
