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
import boostrap from "../Assets/boostrap.png";
import mongodb from "../Assets/mongodb.png";
import vscode from "../Assets/vscode.png";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between animations
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move slightly down
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to full opacity and original position
};

const titleVariant = {
  hidden: { opacity: 0, y: -50 }, // Fade out and slide up
  show: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and slide to position
};

function Skills() {
  return (
    <div id="My Skills" className="bg-back pt-10">
      <div className="w-full h-full">
        {/*My skills section*/}
        <div>
          <br></br>
          {/*Mobile Size skills*/}
          <motion.div variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} className="relative md:hidden flex items-center justify-center">
            <span className="relative top-5 inset-0 text-white opacity-20 text-7xl md:text-9xl z-0">
              My Skills
            </span>

            {/* Foreground "Education" text */}
            <h1 className="text-white absolute text-2xl font-bold z-10">
              My Skills
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </motion.div>

          {/*Desktop Size skills*/}
          <div  className="flex justify-center items-center mt-20">
            <motion.div  variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} className="-rotate-90 relative mt-40 hidden md:block" >
              <h1 className="text-white font-bold text-6xl ">
                My Skills
                <span className="text-white font-bold text-9xl opacity-15 absolute top-0 -left-0 w-max">
                  My Skills
                </span>
              </h1>
            </motion.div>

            {/* mobile size Icons ***********************************************/}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Animates once when 20% of the element is visible
              className="md:hidden"
            >
              <div className="grid grid-cols-3 gap-0 mb-20">
                {/* React */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-xl font-poppins">
                    React
                  </span>
                  <img src={react} alt="React Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Tailwind CSS */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Tailwind CSS
                  </span>
                  <img
                    src={tailwind}
                    alt="TailwindCSS Icon"
                    className="size-20"
                  />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Node JS */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Node JS
                  </span>
                  <img src={nodejs} alt="nodejs Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Postman */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Postman
                  </span>
                  <img src={postman} alt="postman Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* HTML */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    HTML
                  </span>
                  <img src={html} alt="html Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* CSS */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    CSS
                  </span>
                  <img src={css} alt="CSS Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java Script */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Java Script
                  </span>
                  <img src={js} alt="Java Script Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Java
                  </span>
                  <img src={java} alt="Java Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Figma */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Figma
                  </span>
                  <img src={figma} alt="Figma Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Boostrap */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Boostrap
                  </span>
                  <img src={boostrap} alt="Boostrap Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* MongoDB */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    MongoDB
                  </span>
                  <img src={mongodb} alt="MongoDB Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* VS Code */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    VS Code
                  </span>
                  <img src={vscode} alt="VS Code Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>
              </div>
            </motion.div>

            {/* Desktop size Icons *********************************************/}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Animates once when 20% of the element is visible
              className="hidden md:block"
            >
              <div className="grid grid-cols-8 grid-rows-3 gap-1 ml-20 mb-48">
                {/* React */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-xl font-poppins">
                    React
                  </span>
                  <img src={react} alt="React Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Tailwind CSS */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Tailwind CSS
                  </span>
                  <img
                    src={tailwind}
                    alt="TailwindCSS Icon"
                    className="size-20"
                  />
                </motion.div>
                {/* Empty */}
                <div className="bg-transparent"></div>
                {/* Node js */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Node js
                  </span>
                  <img src={nodejs} alt="Nodejs Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>
                {/* Postman */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Postman
                  </span>
                  <img src={postman} alt="Postman Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* HTML */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    HTML
                  </span>
                  <img src={html} alt="Html Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* CSS */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    CSS
                  </span>
                  <img src={css} alt="CSS Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java Script */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Java Script
                  </span>
                  <img src={js} alt="javascript Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Java
                  </span>
                  <img src={java} alt="java Icon" className="size-20" />
                </motion.div>

                {/* Figma */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Figma
                  </span>
                  <img src={figma} alt="figma Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Boostrap */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    Boostrap
                  </span>
                  <img src={boostrap} alt="boostrap Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* MongoDB */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    MongoDB
                  </span>
                  <img src={mongodb} alt="mongodb Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* VS Code */}
                <motion.div
                  variants={itemVariant}
                  className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center"
                >
                  <span className="text-white font-bold text-lg font-poppins">
                    VS Code
                  </span>
                  <img src={vscode} alt="vscode Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
