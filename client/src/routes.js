import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Navbar from "./components/Navbar/Navbar";
import CategoryId from "./components/CategoryId/CategoryId";
import WorkerId from "./components/WorkerId/WorkerId";

const useRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys/:id" element={<CategoryId />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker/:id" element={<WorkerId />} />
      </Routes>
    </>
  );
};

export default useRoutes;
