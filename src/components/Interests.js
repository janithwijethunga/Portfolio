import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import webdesign from "../Assets/webdesign.png";
import fullstack from "../Assets/fullstack.png";
import uxui from "../Assets/uxui.png";
import backend from "../Assets/backend.png";
import frontend from "../Assets/frontend.png";
import webdevelop from "../Assets/webdevelop.png";

function Interests() {
  // Interest items array for easy mapping
  const interestItems = [
    { title: "Web Design", image: webdesign },
    { title: "Web Developer", image: webdevelop },
    { title: "FrontEnd Developer", image: frontend },
    { title: "Backend Developer", image: backend },
    { title: "FullStack Developer", image: fullstack },
    { title: "UX/UI Designer", image: uxui },
  ];

  // Use framer-motion's `useAnimation` and `useInView` for scroll-based animation
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Start animation when 20% of the component is visible
  });

  const controls = useAnimation();

  // Trigger animation when the component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Container and item animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="Interests"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -top-20 -left-24"></div>
        <div className="absolute w-80 h-80 bg-yellow-500 rounded-full opacity-20 blur-3xl top-32 right-20"></div>
        <div className="absolute w-72 h-72 bg-green-500 rounded-full opacity-20 blur-3xl bottom-10 left-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* Title Section */}
        <motion.div
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          ref={ref}
        >
          <div className="relative flex items-center justify-center">
            {/* Background Title */}
            <span className="absolute text-gray-600 opacity-50 text-7xl md:text-9xl z-0">
              Interests
            </span>
            {/* Foreground Title */}
            <h1 className="relative text-2xl md:text-7xl font-bold z-10">
              Interests
            </h1>
          </div>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {interestItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-80 h-56 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gray-800"
              variants={itemVariants}
            >
              <img
                src={item.image}
                alt={`${item.title} Icon`}
                className="w-20 h-20"
              />
              <span className="text-white font-Michroma text-2xl mt-4">
                {item.title}
              </span>
              <hr className="w-20 mt-1 bg-yellow-500 border-0 h-0.5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Interests;
