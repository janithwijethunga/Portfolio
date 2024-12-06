import React from "react";
import react from "../Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import nodejs from "../Assets/nodejs.png";
import postman from "../Assets/postman.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import html from "../Assets/html.png";
import java from "../Assets/java.png";
import figma from "../Assets/figma.png";
import bootstrap from "../Assets/boostrap.png";
import mongodb from "../Assets/mongodb.png";
import vscode from "../Assets/vscode.png";

const skills = [
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Postman", icon: postman },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Java", icon: java },
  { name: "Figma", icon: figma },
  { name: "Bootstrap", icon: bootstrap },
  { name: "MongoDB", icon: mongodb },
  { name: "VS Code", icon: vscode },
];

function Skills() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h1 className="text-5xl font-extrabold text-white mb-12 relative">
          My Skills
          <span className="absolute inset-0 text-9xl text-gray-700 opacity-10 -z-10">
            My Skills
          </span>
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center p-6 transition duration-300"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="h-16 w-16 mb-4"
              />
              <span className="text-white font-bold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
