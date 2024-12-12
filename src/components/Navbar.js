import React, { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false); // Close the menu on navigation
    }
  };

  const sections = ["Home", "AboutMe", "My Skills", "Interests", "Educations", "Projects"];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50 font-poppins">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("me")}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"
            />
          </svg>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer transition-colors px-3 py-2 rounded-lg ${
                activeSection === section
                  ? "bg-white text-gray-900"
                  : "hover:bg-gray-800"
              }`}
            >
              {section === "me" ? "Home" : section.replace(/([A-Z])/g, " $1")}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center space-y-8 z-40">
          <button
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white text-2xl hover:underline"
            >
              {section === "me" ? "Home" : section.replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
