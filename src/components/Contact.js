import React from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: "https://img.icons8.com/color/48/000000/phone.png",
    title: "Phone",
    detail: "+94 77 909 8521",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/email-open.png",
    title: "Email",
    detail: "janithwijethunga5@gmail.com",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/facebook.png",
    title: "Facebook",
    detail: "Facebook Profile",
    link: "https://web.facebook.com/janith.wijethunga.5/",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/linkedin.png",
    title: "LinkedIn",
    detail: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/janithwijethunga/",
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/000000/github.png",
    title: "GitHub",
    detail: "GitHub Profile",
    link: "https://github.com/janithwijethunga",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-5 text-center"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <h1 className="text-white text-4xl font-bold relative z-10">
            Contact Me
          </h1>
          <span className="absolute inset-0 text-8xl text-gray-600 font-bold opacity-10 -top-2">
            Contact
          </span>
        </motion.div>

        {/* Contact Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              {/* Icon */}
              <a
                href={contact.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition transform duration-300"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <img
                    src={contact.icon}
                    alt={contact.title}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                {/* Title */}
                <h3 className="text-yellow-500 font-bold text-lg sm:text-xl group-hover:underline">
                  {contact.title}
                </h3>
                {/* Detail */}
                <p className="text-gray-400 text-sm sm:text-base">
                  {contact.detail}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
