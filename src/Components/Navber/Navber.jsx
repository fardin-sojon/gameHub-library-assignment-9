import React, { useContext, useState, useEffect } from "react";
import logoImg from "../../assets/game-hub.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

const Navber = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const haldleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toast.success("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => toast(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1">
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-game" className="flex items-center gap-1">
          <IoLogoGameControllerB /> All Game
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="flex items-center gap-1">
          <RiTeamLine /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="flex items-center gap-1">
          <FaUserEdit /> My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`shadow-md fixed w-full z-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="navbar container mx-auto py-2">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                darkMode ? "bg-gray-800 text-white" : "bg-base-100"
              }`}
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img className="w-8 h-8" src={logoImg} alt="Logo" />
            <span className="font-semibold text-lg">GameHub</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <label className="toggle text-base-content cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            {/* Sun Icon */}
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            {/* Moon Icon */}
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          {/* User Profile / Auth Buttons */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content mt-3 p-3 shadow rounded-box w-60 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              >
                {/* User Info */}
                <li className="mb-2 border-b pb-2">
                  <div className="flex flex-col">
                    <span className="font-semibold">{user.displayName}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                      {user.email}
                    </span>
                  </div>
                </li>

                {/* My Profile Link */}
                <li className="mb-2">
                  <Link
                    to="/profile"
                    className="block px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition"
                  >
                    My Profile
                  </Link>
                </li>

                {/* Logout Button */}
                <li>
                  <button
                    onClick={haldleSignOut}
                    className="w-full px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth-register"
                className="btn btn-sm bg-[#155DFC] text-white"
              >
                Register
              </Link>
              <Link
                to="/auth-login"
                className="btn btn-sm bg-[#155DFC] text-white"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
