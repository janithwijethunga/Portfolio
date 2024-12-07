import React from "react";
import { motion } from "framer-motion";
import react from "../Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import nodejs from "../Assets/nodejs.png";
import postman from "../Assets/postman.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import html from "../Assets/html.png";
import java from "../Assets/java.png";
import figma from "../Assets/figma.png";
import boostrap from "../Assets/boostrap.png";
import mongodb from "../Assets/mongodb.png";
import vscode from "../Assets/vscode.png";

const skills = [
  { name: "React", img: react },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Node JS", img: nodejs },
  { name: "Postman", img: postman },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "Java", img: java },
  { name: "Figma", img: figma },
  { name: "Bootstrap", img: boostrap },
  { name: "MongoDB", img: mongodb },
  { name: "VS Code", img: vscode },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-12">
      {/* Title */}
      <motion.h1
        className="text-white text-center text-4xl sm:text-6xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h1>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        variants={cardContainerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group bg-gradient-to-tl from-blue-600 to-indigo-800 p-4 rounded-lg shadow-lg transform perspective-1000"
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              rotateX: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg group-hover:shadow-2xl transition duration-300">
              <img
                src={skill.img}
                alt={skill.name}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h2 className="text-white text-center text-lg font-semibold">
                {skill.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
