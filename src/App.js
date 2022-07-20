import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./conponents/Navbar";
import Home from "./conponents/Pages/Home";
import ExerciseDetail from "./conponents/Pages/ExerciseDetail";
import Footer from "./conponents/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
