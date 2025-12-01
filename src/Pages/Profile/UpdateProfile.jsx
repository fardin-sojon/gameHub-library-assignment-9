import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import UserTitle from "../../Hook/UserTitle";

const UpdateProfile = () => {
  UserTitle(`Profile Edit || Gamehub`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(user, { displayName: name, photoURL })
      .then(() => {
        toast.success("Profile updated!");
        navigate("/profile");
      })
      .catch(() => {
        toast.error("Update failed!");
      });
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-xl p-8 w-[400px] flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <motion.input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="border px-3 py-2 rounded"
            whileFocus={{ scale: 1.05, borderColor: "#2563EB" }}
          />
          <motion.input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Photo URL"
            className="border px-3 py-2 rounded"
            whileFocus={{ scale: 1.05, borderColor: "#2563EB" }}
          />
          <div className="flex justify-center gap-2">
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save
            </motion.button>
            <motion.button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfile;
