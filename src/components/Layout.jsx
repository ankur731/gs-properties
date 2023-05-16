import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main className="container max-w-7xl mx-auto">
      <Navbar />
      <section className="min-h-screen">{children}</section>
      {/* <Footer /> */}
    </main>
  );
}

export default Layout;
