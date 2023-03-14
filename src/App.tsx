import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>HELLOW</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
