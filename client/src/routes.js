import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const useRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/add" element={<h1>Add</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default useRoutes;
