import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <main className="container max-w-7xl mx-auto">
      <Navbar />
      <section className="min-h-screen">{children}</section>
    </main>
  );
}

export default Layout;
