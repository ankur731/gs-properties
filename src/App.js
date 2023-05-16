import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePage, HomePage } from "./Pages";
function App() {
  // return (
  //   <div className="container max-w-5xl mx-auto min-h-screen pb-12">

  //     <header id="header" className="py-12">
  //       <h1 className="text-2xl md:text-4xl font-bold text-center  rounded-sm">
  //         GS Add Property
  //       </h1>
  //     </header>
  //     <div className="mt-8 max-w-xl mx-auto px-4">
  //       <AddForm/>
  //     </div>
  //   </div>
  // );
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
