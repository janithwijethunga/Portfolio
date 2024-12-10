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

function Skills() {

  
  
  return (
    <div id="My Skills" className="bg-back pt-10">
      <div className=" w-full h-full">
        {/*My skills section*/}
        <div>
          <br></br>
          {/*Mobile Size skills*/}
          <div className=" relative md:hidden flex items-center justify-center">
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
          </div>

          {/*Desktop Size skills*/}
          <div className="flex justify-center items-center mt-20">
            <div className="-rotate-90 relative mt-40  hidden md:block">
              <h1 className="text-white font-bold text-6xl ">
                My Skills
                <span className="text-white font-bold text-9xl opacity-15 absolute top-0 -left-0 w-max">
                  My Skills
                </span>
              </h1>
            </div>

            {/* mobile size Icons ***********************************************/}
            <div className="md:hidden">
              <div className="grid grid-cols-3 gap-0 mb-20 ">
                {/* React */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    React
                  </span>
                  <img src={react} alt="React Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Tailwind CSS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-lg font-poppins">
                    Tailwind CSS
                  </span>
                  <img
                    src={tailwind}
                    alt="TailwindCSS Icon"
                    className="size-20"
                  />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Node JS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Node js
                  </span>
                  <img src={nodejs} alt="Nodejs Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Postman */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Postman
                  </span>
                  <img src={postman} alt="Postman Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* HTML */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    HTML
                  </span>
                  <img src={html} alt="Html Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* CSS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    CSS
                  </span>
                  <img src={css} alt="CSS Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java Script */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Java Script
                  </span>
                  <img src={js} alt="javascript Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Java
                  </span>
                  <img src={java} alt="java Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Figma */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Figma
                  </span>
                  <img src={figma} alt="figma Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Boostrap */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Boostrap
                  </span>
                  <img src={boostrap} alt="Boostrap Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* MongoDB */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    MongoDB
                  </span>
                  <img src={mongodb} alt="mongodb Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* VS Code */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    VS Code
                  </span>
                  <img src={vscode} alt="vscode Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>
              </div>
            </div>

            {/* Desktop size Icons *********************************************/}
            <div className="hidden md:block">
              <div className=" grid grid-cols-8 grid-rows-3 gap-0  ml-20 mb-48 ">
                {/* React */}
                <motion.div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    React
                  </span>
                  <img src={react} alt="React Icon" className="size-20" />
                </motion.div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Tailwind CSS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-lg font-poppins">
                    Tailwind CSS
                  </span>
                  <img
                    src={tailwind}
                    alt="TailwindCSS Icon"
                    className="size-20"
                  />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Node JS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Node js
                  </span>
                  <img src={nodejs} alt="Nodejs Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Postman */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Postman
                  </span>
                  <img src={postman} alt="Postman Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* HTML */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    HTML
                  </span>
                  <img src={html} alt="Html Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* CSS */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    CSS
                  </span>
                  <img src={css} alt="CSS Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java Script */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Java Script
                  </span>
                  <img src={js} alt="javascript Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent"></div>

                {/* Java */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Java
                  </span>
                  <img src={java} alt="java Icon" className="size-20" />
                </div>

                {/* Figma */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Figma
                  </span>
                  <img src={figma} alt="figma Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* Boostrap */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    Boostrap
                  </span>
                  <img src={boostrap} alt="Boostrap Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* MongoDB */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    MongoDB
                  </span>
                  <img src={mongodb} alt="mongodb Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>

                {/* VS Code */}
                <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                  <span className="text-white font-bold text-xl font-poppins">
                    VS Code
                  </span>
                  <img src={vscode} alt="vscode Icon" className="size-20" />
                </div>

                {/* Empty */}
                <div className="bg-transparent  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
