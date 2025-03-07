import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-50 shadow-lg py-4 px-10">
        <div className=" container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-blue-500 text-xl font-bold">
            <h1 className="text-2xl font-bold text-center">HomeHunt🏠</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
