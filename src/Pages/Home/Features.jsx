import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaRocket, FaUsers } from "react-icons/fa"; // Gaming related icons

const features = [
  {
    title: "Play Top Games",
    desc: "Access and play the latest trending games from our library.",
    icon: <FaGamepad className="text-blue-600 w-10 h-10 mb-4" />,
  },
  {
    title: "Fast Updates",
    desc: "Stay updated with new releases, patches, and events instantly.",
    icon: <FaRocket className="text-blue-600 w-10 h-10 mb-4" />,
  },
  {
    title: "Community Support",
    desc: "Join a vibrant gaming community and get help from fellow players.",
    icon: <FaUsers className="text-blue-600 w-10 h-10 mb-4" />,
  },
];

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

const Features = () => {
  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Why Choose GameHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center cursor-pointer overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
