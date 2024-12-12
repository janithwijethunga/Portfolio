import React from "react";
import { motion } from "framer-motion";
import oepm from "../Assets/oepm.png";
import brick from "../Assets/brick.png";

const projects = [
  {
    title: "Courier Service Management System",
    description:
      "A web-based system to manage courier operations efficiently. Features include an Admin Dashboard for tracking deliveries and drivers, Automated Driver Assignment based on availability, and a Driver Profile Page for updating delivery statuses and availability. Supports real-time tracking, automated updates, and report generation for streamlined logistics.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubLink: "https://github.com/AnjanaTinush/OEPM_System",
    image: oepm, // Replace with the actual path
  },
  {
    title: "BrickBlaster Mania - Mobile Game Application",
    description:
      "A mobile game where players bounce a ball to break bricks, aiming for the highest score. Features include vibrant visuals, smooth controls, a high-score tracker, and three lives per game. Built with Kotlin and Android Studio.",
    technologies: ["Kotlin", "Android Studio"],
    githubLink: "https://github.com/janithwijethunga/The-Brick-Blaster",
    image: brick, // Replace with the actual path
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-back pt-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-white font-bold text-4xl">
            My Projects
            <span className="text-white font-bold text-9xl opacity-10 absolute inset-0">
              My Projects
            </span>
          </h1>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4  gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-300 bg-gray-700 px-2 py-1 mr-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <br></br>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <button className="flex items-center justify-center w-full px-4 py-2 bg-yellow-500 text-black font-bold text-sm rounded hover:bg-yellow-600 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.03c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.234 1.84 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.507 11.507 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.37.81 1.096.81 2.21v3.284c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    View on GitHub
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
