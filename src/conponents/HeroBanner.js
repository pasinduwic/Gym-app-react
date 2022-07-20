import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import heroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" }
      }}
      position="relative"
      px="20px"
    >
      <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        bt="30px"
      >
        Sweat, Smile and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="4px">
        Checkout the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        {" "}
        Expore Exercises{" "}
      </Button>

      <Typography
        fontWeight="600px"
        fontSize="200px"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }
        }}
      >
        {" "}
        Exercises{" "}
      </Typography>
      <img src={heroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
