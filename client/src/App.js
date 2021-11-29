import React from "react";
import useRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const router = useRoutes();

  return (
    <div className="App">
      <BrowserRouter>{router}</BrowserRouter>
    </div>
  );
}

export default App;
