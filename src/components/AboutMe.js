import React from "react";
import { motion } from "framer-motion";
import My2 from "../Assets/My2.png";
import { FaDownload } from "react-icons/fa";

function AboutMe() {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div  id="AboutMe" >
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Animates when the component is 50% in the viewport
      variants={containerVariant}
      
      className=" relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6 md:px-16 lg:px-24"
    >
      {/* Cool Background */}
      <div className="absolute inset-0 overflow-hidden z-0 ">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -top-16 -left-24"></div>
        <div className="absolute w-80 h-80 bg-yellow-500 rounded-full opacity-20 blur-3xl top-32 right-20"></div>
        <div className="absolute w-72 h-72 bg-green-500 rounded-full opacity-20 blur-3xl bottom-10 left-40"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 h-full relative z-10">
        {/* Text Section */}
        <motion.div
          variants={textVariant}
          className="lg:w-1/2 text-white font-poppins"
        >
          <h1 className="text-3xl md:text-4xl font-semibold relative mb-6">
            <span className="absolute inset-0 text-gray-700 opacity-5 text-7xl lg:text-8xl font-extrabold">
              About Me
            </span>
            About Me
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            I am an undergraduate student pursuing a{" "}
            <span className="text-yellow-400 font-semibold">
              BSc (Hons) in Information Technology
            </span>{" "}
            at the Sri Lanka Institute of Information Technology.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Passionate about{" "}
            <span className="text-yellow-400 font-semibold">
              Fullstack Development
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-semibold">
              UX/UI Design
            </span>
            , I enjoy working in collaborative environments, learning new
            technologies, and delivering high-quality results.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Driven by challenges, I aim to grow personally and professionally
            while contributing positively to any team or organization I join.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/JanithwijethungaCV.pdf"
            download
            className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            <FaDownload />
            <span>Download CV</span>
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariant}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src={My2}
            alt="Janith Wijethunga"
            className="w-72 md:w-96 lg:w-full max-w-sm rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
}

export default AboutMe;
