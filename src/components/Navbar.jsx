import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full bg-base-200 flex justify-between py-4 px-2 md:px-6 md:py-6">
      <div className="text-xl md:text-3xl md:font-bold text-primary">GS Property</div>
      <ul className="flex items-center space-x-4 md:space-x-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create" className="">Create</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
