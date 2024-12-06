import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold cursor-pointer">JW</h1>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="text-yell cursor-pointer">Home</li>
          <li className="text-white cursor-pointer hover:text-yell">About</li>
          <li className="text-white cursor-pointer hover:text-yell">Interests</li>
          <li className="text-white cursor-pointer hover:text-yell">Education</li>
          <li className="text-white cursor-pointer hover:text-yell">Projects</li>
          <li className="text-white cursor-pointer hover:text-yell">Contact</li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none hover:text-yell"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
