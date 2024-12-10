import React from "react";
import { motion } from "framer-motion";
import webdesign from "../Assets/webdesign.png";
import fullstack from "../Assets/fullstack.png";
import uxui from "../Assets/uxui.png";
import backend from "../Assets/backend.png";
import frontend from "../Assets/frontend.png";
import webdevelop from "../Assets/webdevelop.png";

function Interests() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16">
      {/* Cool Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -top-20 -left-24"></div>
        <div className="absolute w-80 h-80 bg-yellow-500 rounded-full opacity-20 blur-3xl top-32 right-20"></div>
        <div className="absolute w-72 h-72 bg-green-500 rounded-full opacity-20 blur-3xl bottom-10 left-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* Title */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-white font-bold text-6xl">
            My Interests
            <span className="text-white font-bold text-9xl opacity-15 absolute top-0 -left-48 w-max">
              My Interests
            </span>
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
          {/* Interest Items */}
          {[
            { title: "Web Design", image: webdesign },
            { title: "Web Developer", image: webdevelop },
            { title: "FrontEnd Developer", image: frontend },
            { title: "Backend Developer", image: backend },
            { title: "FullStack Developer", image: fullstack },
            { title: "UX/UI Designer", image: uxui },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-80 h-56 bg-brw flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <img src={item.image} alt={`${item.title} Icon`} className="w-20 h-20" />
              <span className="text-white font-Michroma text-2xl mt-4">
                {item.title}
              </span>
              <hr className="w-20 mt-1 bg-yell border-0 h-0.5"></hr>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;
