import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent! Check your Gmail 📩");
        setTimeout(() => {
          window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        }, 1000);
        navigate("/auth-login");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="card bg-base-100 w-full max-w-sm shadow-2xl"
      >
        <div className="card-body p-8">
          {/* Heading animation */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold text-center mb-2"
          >
            Forget Password
          </motion.h1>

          <p className="text-center text-gray-500 mb-6 text-sm">
            Enter your email below to receive a reset link.
          </p>

          <form onSubmit={handleReset}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
                required
              />

              {/* Blue button + animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white mt-4 w-full"
              >
                Reset Password
              </motion.button>
            </fieldset>
          </form>

          <p className="text-center mt-4">
            Remember your password?{" "}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/auth-login")}
              className="text-blue-500 hover:underline"
            >
              Go back to Login
            </motion.button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
