import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { NavLink, useNavigate } from "react-router";
import { motion } from "framer-motion";
import UserTitle from "../../Hook/UserTitle";
import userNotFound from "../../assets/user-not-found.png";

const Profile = () => {
  UserTitle(`Profile || Gamehub`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#1E40AF" },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {user ? (
        <motion.div
          className="bg-white shadow-md rounded-xl p-8 w-[400px] flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Profile
          </motion.h2>

          <motion.div
            className="w-24 h-24 rounded-full bg-gray-200 mb-4 border-2 border-gray-300 flex justify-center items-center overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              className="rounded-full w-30 border-4 border-blue-500"
              src={user?.photoURL}
              alt="User Avatar"
            />
          </motion.div>

          <motion.div
            className="w-full text-left space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <p className="text-gray-500 text-sm mb-1">Full Name</p>
              <p className="font-medium text-lg text-gray-800">
                {user?.displayName}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Email Address</p>
              <p className="font-medium text-lg text-gray-800">{user?.email}</p>
            </div>
          </motion.div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => navigate("/profile/edit")}
            className="mt-6 bg-[#155DFC] text-white px-6 py-2 rounded-lg transition-all"
          >
            Update Profile
          </motion.button>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-[400px] flex flex-col items-center"
          >
            <img
              src={userNotFound}
              alt="User not found"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Button Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center items-center mt-6"
          >
            <NavLink
              to="/"
              className="btn w-32 text-center bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow-md">
              Back
            </NavLink>
            <h2 className="text-sm ml-2">Please? <NavLink to="/auth-login" className="underline text-blue-500">Login</NavLink></h2>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile;
