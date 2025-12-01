import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import UserTitle from "../Hook/UserTitle";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  UserTitle(`Register || Gamehub`);
  const { setUser, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  if (loading) {
    return <Loading></Loading>;
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const haldleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regexPassword.test(password)) {
      toast(
        "Password must have at least 1 uppercase, 1 lowercase letter, and be 6 characters long."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name, photoURL })
          .then(() => {
            toast.success("Registration Successfully✅");
            navigate(location?.state || "/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  const haldleShowPassword = () => setShowPassword(!showPassword);

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Sign In Successfully✅");
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[47px] font-bold"
          >
            Register Now!
          </motion.h1>

          <form onSubmit={haldleRegister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />

              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <p
                  onClick={haldleShowPassword}
                  className="absolute top-7 right-7 cursor-pointer text-lg"
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-blue-600 hover:bg-blue-700 text-white mt-4 w-full"
              >
                Register
              </motion.button>
            </fieldset>
          </form>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={googleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
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

          <p className="text-center mt-3">
            Already Have An Account ?{" "}
            <Link to="/auth-login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
