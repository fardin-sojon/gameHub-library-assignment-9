// PopularGame.jsx
import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { motion } from "framer-motion";

const PopularGame = () => {
  const games = useLoaderData();
  const topGames = games.sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-5 text-center">Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topGames.map((game) => (
          <motion.a
            key={game.id}
            href={`/game-details/${game.id}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-3">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p className="text-gray-600">Rating: {game.ratings} ⭐</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <NavLink
          to="/all-game"
          className="btn bg-blue-500 hover:bg-blue-600 text-white"
        >
          All Game
        </NavLink>
      </div>
    </motion.div>
  );
};

export default PopularGame;
