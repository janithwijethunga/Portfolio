import React from "react";
import { motion } from "framer-motion";
import My1 from "../Assets/My1.png";

function HeroSection() {
  return (
    <div id="Home" className="relative bg-gradient-to-b from-gray-900 to-black h-screen flex items-center justify-center px-6 mt-12 md:mt-5 ">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-20 -top-16 -left-20"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-10 bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center ">
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-0 md:mr-16"
        >
          <img
            src={My1}
            alt="Janith Wijethunga"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-yellow-500 shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white text-3xl md:text-4xl font-extrabold"
          >
            Hello, I'm
          </motion.h1>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white text-5xl md:text-7xl font-bold mt-4"
          >
            <span className="text-yellow-400">Janith Wijethunga</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-gray-300 text-lg md:text-2xl font-medium mt-6"
          >
            FullStack Developer | UI/UX Designer
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-gray-400 text-sm md:text-lg mt-4 max-w-md mx-auto md:mx-0"
          >
            Passionate about creating user-friendly digital experiences with a
            strong focus on clean code, intuitive designs, and modern
            technologies.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="flex justify-center md:justify-start mt-8 space-x-4"
          >
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border-2 border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500 font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
