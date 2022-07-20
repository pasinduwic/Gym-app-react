import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseCard = (props) => {
  return (
    <Link
      className="Exercise-card"
      href={`/exercise/${props.exercise.id}`}
      sx={{ textDecoration: "none", width: "400px" }}
    >
      <img
        src={props.exercise.gifUrl}
        alt={props.exercise.name}
        loading="lazy"
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadious: "20px",
            textTransformation: "capitalize"
          }}
          className="styled-btn"
        >
          {props.exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            textTransformation: "capitalize",
            borderRadious: "20px"
          }}
          className="styled-btn"
        >
          {props.exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {props.exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
