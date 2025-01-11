import React from "react";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between py-3 px-6 bg-white shadow-md">
      {/* Logo and Title */}
      <h1
        className="text-xl sm:text-2xl font-serif text-gray-800"
        style={{
          fontFamily: "Prata, serif",
          fontWeight: "400",
        }}
      >
        ELEGANCE<span className="text-pink-500 ml-2 text-sm sm:text-base font-normal">Admin</span>
      </h1>

      {/* Logout Button */}
      <button onClick={()=>setToken('')}
        className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white transition-all px-4 py-2 rounded-md text-sm sm:text-base"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
