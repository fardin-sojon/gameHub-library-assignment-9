import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { motion } from "framer-motion";
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

  const allGames = useLoaderData();
  const [sortOption, setSortOption] = useState("rating-asc");

  const sortedGames = [...allGames].sort((a, b) => {
    switch (sortOption) {
      case "rating-asc":
        return parseFloat(a.ratings) - parseFloat(b.ratings);
      case "rating-desc":
        return parseFloat(b.ratings) - parseFloat(a.ratings);
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div className="py-10 bg-gray-100 pt-24 px-3 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-5">All Games</h2>

        <div className="flex justify-end mb-6 gap-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          >
            <option value="rating-asc">Rating: Low → High</option>
            <option value="rating-desc">Rating: High → Low</option>
            <option value="title-asc">Title: A → Z</option>
            <option value="title-desc">Title: Z → A</option>
          </select>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedGames.map((game) => (
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
