import React from "react";
import My1 from "../Assets/My1.png";
import My2 from "../Assets/My2.png";
import { FaDownload } from "react-icons/fa";
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

function Homepage() {
  return (
    <div>
      <div className="bg-back w-full h-full">
        <nav className=" fixed w-full flex justify-between items-center px-8 py-4 bg-gray-900 z-10">
          <h1 className="text-white font-semibold text-2xl">JW</h1>
          <ul className="flex space-x-16 font-semibold text-xl font-poppins ">
            <li className="text-yell cursor-pointer">Home</li>
            <li className="text-white cursor-pointer hover:text-yell">About</li>
            <li className="text-white cursor-pointer hover:text-yell">
              Interests
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Education
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Projects
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Contact
            </li>
          </ul>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/*Home*/}
        <div className="justify-center flex">
          {/*My1*/}
          <div className="size-4/12">
            <img src={My1} alt="Janith Wijethunga" />
          </div>

          {/*text*/}
          <div className="font-poppins flex flex-col justify-center text-left ml-32">
            <h1 className="text-white text-3xl font-bold">Hello!</h1>
            <h1 className="text-white text-7xl font-bold">
              I'M{" "}
              <span className="text-yell text-8xl ">
                JANITH <br></br>WIJETHUNGA
              </span>
            </h1>
            <p className=" font-bold text-3xl text-white">
              FullStack Developer
            </p>
            <p className="font-bold text-white text-3xl">UI/UX</p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        

        {/*About Me section*/}
        <div className="justify-center flex">
          {/*text*/}
          <div className="font-poppins flex flex-col justify-center w-2/5">
            {/*About Me heading*/}
            <div className="">
              <h1 className="text-white font-bold text-6xl">
                About Me
                <span className="text-white font-bold text-9xl opacity-15 absolute left-40">
                  About Me
                </span>
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <p className="text-white font-poppins font-bold text-lg">
                {" "}
                I am an undergraduate student pursuing a{" "}
                <span className="text-yell">
                  BSc (Hons) in Information Technology{" "}
                </span>
                at the sri lanka institute of information technology.
              </p>
              <br></br>
              <p className="text-white font-poppins font-bold text-lg">
                I am interested in{" "}
                <span className="text-yell">Fullstack Development </span>
                and <span className="text-yell">UX/UI Design </span>
                and enjoy learning new technologies to improve my skills. I work
                well in team environments and always aim to deliver high-quality
                work on time.
              </p>
              <br></br>
              <p className="text-white font-poppins font-bold text-lg">
                I see challenges as opportunities to grow and strive to
                contribute positively to any organization I am part of.
              </p>
              <br></br>
              <div className="">
                <a
                  href="/JanithwijethungaCV.pdf"
                  download
                  class="bg-yell hover:bg-yellow-500 text-black  hover:text-black font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <FaDownload />
                  <span className="ml-2 text-lg">Download CV</span>
                </a>
              </div>

              <div className="mt-8"></div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>

          {/*My2*/}
          <div className="size-4/12 ml-16">
            <img src={My2} alt="Janith Wijethunga" />
          </div>
        </div>

        {/*My skills section*/}
        <div>
          <br></br>
          <br></br>
          

          {/*skills*/}
          <div className="flex justify-center items-center">
          <div className="-rotate-90 relative mt-20">
            <h1 className="text-white font-bold text-6xl">
              My Skills
              <span className="text-white font-bold text-9xl opacity-15 absolute top-0 -left-0 w-max">
                My Skills
              </span>
            </h1>
          </div>

            {/* Icons */}
            <div className="grid grid-cols-8 grid-rows-3 gap-0  ml-20 mb-48 ">
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

              {/* React */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  Postman
                </span>
                <img src={postman} alt="Postman Icon" className="size-20" />
              </div>

              {/* Empty */}
              <div className="bg-transparent  "></div>

              {/* React */}
              <div className="bg-transparent"></div>

              {/* Empty */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  HTML
                </span>
                <img src={html} alt="Html Icon" className="size-20" />
              </div>

              {/* React */}
              <div className="bg-transparent"></div>

              {/* Empty */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  CSS
                </span>
                <img src={css} alt="CSS Icon" className="size-20" />
              </div>

              {/* React */}
              <div className="bg-transparent"></div>

              {/* Empty */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  Java Script
                </span>
                <img src={js} alt="javascript Icon" className="size-20" />
              </div>

              {/* React */}
              <div className="bg-transparent"></div>

              {/* Empty */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  Java
                </span>
                <img src={java} alt="java Icon" className="size-20" />
              </div>

              {/* React */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  Figma
                </span>
                <img src={figma} alt="figma Icon" className="size-20" />
              </div>

              {/* Empty */}
              <div className="bg-transparent  "></div>

              {/* React */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  Boostrap
                </span>
                <img src={boostrap} alt="Boostrap Icon" className="size-20" />
              </div>

              {/* Empty */}
              <div className="bg-transparent  "></div>

              {/* React */}
              <div className="bg-back shadow-sha h-32 w-32 flex flex-col justify-center items-center">
                <span className="text-white font-bold text-xl font-poppins">
                  MongoDB
                </span>
                <img src={mongodb} alt="mongodb Icon" className="size-20" />
              </div>

              {/* Empty */}
              <div className="bg-transparent  "></div>

              {/* React */}
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
  );
}

export default Homepage;
