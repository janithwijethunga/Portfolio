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
    image: oepm,
  },
  {
    title: "BrickBlaster Mania - Mobile Game Application",
    description:
      "A mobile game where players bounce a ball to break bricks, aiming for the highest score. Features include vibrant visuals, smooth controls, a high-score tracker, and three lives per game. Built with Kotlin and Android Studio.",
    technologies: ["Kotlin", "Android Studio"],
    githubLink: "https://github.com/janithwijethunga/The-Brick-Blaster",
    image: brick,
  },
  // Add more projects as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between child animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-gray-900 pt-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-white font-bold text-4xl">My Projects</h1>
          <p className="text-gray-400 mt-2">
            A collection of my featured projects showcasing my skills and passion for technology.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg hover:border-yellow-500 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-yellow-500 font-bold text-sm hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ProjectsSection;
