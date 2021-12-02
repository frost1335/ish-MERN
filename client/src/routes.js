import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Navbar from "./components/Navbar/Navbar";
import CategoryId from "./components/CategoryId/CategoryId";

const useRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys/:id" element={<CategoryId />} />
        <Route path="/workers" element={<Workers />} />
      </Routes>
    </>
  );
};

export default useRoutes;
