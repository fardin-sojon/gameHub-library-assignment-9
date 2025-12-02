import React, { useContext } from "react";
import { NavLink, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../Components/Loading";
import UserTitle from "../Hook/UserTitle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AllGame = () => {
  UserTitle(`All Game || Gamehub`);

  const topGames = useLoaderData();
  // console.log(topGames);

  return (
    <div className="py-10 bg-gray-100 pt-24 px-3">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-5">All Games</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topGames.map((game) => (
            <motion.div
              key={game.id}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden p-3 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              <a>
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p className="text-gray-600">Rating: {game.ratings} ⭐</p>

                {/* See More Button */}
                <a
                  href={`/game-details/${game.id}`}
                  className="mt-3 inline-block bg-blue-600 text-white w-full text-center py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                  See More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-5">
          <NavLink
            to="/"
            className="btn bg-blue-500 hover:bg-blue-600 text-white"
          >
            Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllGame;
