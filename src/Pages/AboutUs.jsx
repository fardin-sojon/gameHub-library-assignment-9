import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import UserTitle from "../Hook/UserTitle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  UserTitle(`About Us || Gamehub`);
  const team = useLoaderData();


  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 pt-32 min-h-screen">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a dedicated team of developers and designers passionate about
          building creative and high-quality digital experiences.
        </p>
      </div>

      {/* Team Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-all"
            variants={cardVariants}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-blue-500 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 text-gray-600 text-xl">
              <a href={member.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-gray-800" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a href={member.facebook} target="_blank" rel="noreferrer">
                <FaFacebook className="hover:text-blue-500" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
