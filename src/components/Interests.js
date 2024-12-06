import React from "react";
import webdesign from "../Assets/webdesign.png";
import fullstack from "../Assets/fullstack.png";
import uxui from "../Assets/uxui.png";
import backend from "../Assets/backend.png";
import frontend from "../Assets/frontend.png";
import webdevelop from "../Assets/webdevelop.png";

const interests = [
  { name: "Web Design", icon: webdesign },
  { name: "Web Development", icon: webdevelop },
  { name: "Frontend Development", icon: frontend },
  { name: "Backend Development", icon: backend },
  { name: "Fullstack Development", icon: fullstack },
  { name: "UX/UI Design", icon: uxui },
];

function Interests() {
  return (
    <div className="bg-gray-900 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center relative mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            My Interests
          </h1>
          <span className="absolute inset-0 text-8xl md:text-9xl opacity-10 text-yellow-500 -z-10">
            My Interests
          </span>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center transition duration-300"
            >
              <img
                src={interest.icon}
                alt={`${interest.name} icon`}
                className="h-20 w-20 mb-4"
              />
              <h2 className="text-white text-2xl font-bold mb-2">
                {interest.name}
              </h2>
              <hr className="w-16 border-yellow-500 border-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;
