import React from "react";
import MySwiper from "./MySwiper";
import PopularGame from "../../Components/PopularGame";
import NewsLetter from "../../Components/NewsLetter";
import { motion } from "framer-motion";
import UserTitle from "../../Hook/UserTitle";
import Gallery from "./Gallery";
import Features from "./Features";

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  UserTitle("Home || Gamehub");

  return (
    <div className="bg-gray-100 min-h-screen p-2 pt-10">
      <div className="container mx-auto">
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <MySwiper />
        </motion.div>

        {/* Popular Games Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PopularGame cardVariants={cardVariants} />
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <Gallery />
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <Features />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <NewsLetter />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
