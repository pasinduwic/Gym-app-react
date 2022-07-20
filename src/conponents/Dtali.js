import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ exercisesDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack xs={{ gap: { lg: "36px", xs: "20px" } }}>
        <Typography
          textTransform="uppercase"
          marginBottom="40px"
          sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" } }}
        >
          {name}
        </Typography>
        <Typography variant="h6" marginBottom="40px">
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain enaergy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                margin: "10px"
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
