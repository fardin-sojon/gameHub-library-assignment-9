import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import UserTitle from "../Hook/UserTitle";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  UserTitle("Login || Gamehub");
  const { user, setUser, loading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  // console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successfully ✅");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successfully ✅");
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      {/* Floating Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full blur-3xl"
        style={{
          filter: "blur(100px)",
          zIndex: 0,
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 30, -30, 0],
          rotate: [0, 45, -45, 0],
          transition: { repeat: Infinity, duration: 8 },
        }}
      ></motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotateY: 45 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="card bg-white/90 backdrop-blur-md w-full max-w-sm shadow-2xl z-10"
      >
        <div className="card-body">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center mb-4 text-gray-800"
          >
            Login Now
          </motion.h1>

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label text-gray-600">Email</label>
              <motion.input
                ref={emailRef}
                name="email"
                type="email"
                className="input border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
                whileFocus={{
                  scale: 1.03,
                  boxShadow: "0 0 10px rgba(37,99,235,0.4)",
                }}
              />

              {/* Password */}
              <div className="relative mt-2">
                <label className="label text-gray-600">Password</label>
                <motion.input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                  required
                  whileFocus={{
                    scale: 1.03,
                    boxShadow: "0 0 10px rgba(37,99,235,0.4)",
                  }}
                />
                <p
                  onClick={handleShowPassword}
                  className="absolute top-7 right-7 cursor-pointer text-lg"
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </p>
              </div>

              {/* Forget Password */}
              <div className="mt-2 text-left">
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(37,99,235,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="btn bg-blue-600 hover:bg-blue-700 text-white mt-5 w-full"
              >
                Login
              </motion.button>
            </fieldset>
          </form>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={googleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </motion.button>

          <p className="text-center mt-3 text-gray-600">
            Don’t Have An Account?{" "}
            <Link to="/auth-register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
