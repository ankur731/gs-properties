import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePage, HomePage } from "./Pages";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
