import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workers from "./pages/Workers";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workers" element={<Workers />} />
    </Routes>
  );
};

export default useRoutes;
