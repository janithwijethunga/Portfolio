import React from "react";
import My2 from "../Assets/My2.png";
import { FaDownload } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="bg-gray-900 py-20 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="text-white text-center md:text-left md:w-1/2 font-poppins">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 relative">
            About Me
            <span className="absolute text-8xl md:text-9xl opacity-10 top-0 left-0 md:left-10 transform translate-y-[-50%] text-yellow-500">
              About Me
            </span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
            I am an undergraduate student pursuing a{" "}
            <span className="text-yellow-400">
              BSc (Hons) in Information Technology
            </span>{" "}
            at the Sri Lanka Institute of Information Technology.
          </p>
          <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
            I am passionate about{" "}
            <span className="text-yellow-400">Fullstack Development</span> and{" "}
            <span className="text-yellow-400">UX/UI Design</span>. I enjoy
            learning new technologies to enhance my skills, collaborating in
            team environments, and delivering high-quality work on time.
          </p>
          <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
            Challenges inspire me to grow, and I strive to contribute positively
            to any organization I am part of.
          </p>
          <div className="mt-4">
            <a
              href="/JanithwijethungaCV.pdf"
              download
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg inline-flex items-center transition duration-300"
            >
              <FaDownload />
              <span className="ml-2">Download CV</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0 md:ml-16 md:w-1/2 flex justify-center">
          <img
            src={My2}
            alt="Janith Wijethunga"
            className="rounded-lg shadow-lg w-80 md:w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
