import React, { useContext } from "react";
import logoImg from "../../assets/game-hub.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import UserTitle from "../../Hook/UserTitle";

const Navber = () => {
  const { user, setUser } = useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();

  const haldleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toast.success("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-game">
          <IoLogoGameControllerB />
          All Game
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us">
          <RiTeamLine />
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          <FaUserEdit />
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className=" bg-white shadow-md fixed w-full z-10">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown  hover:bg-blue-400 p-1 rounded-md">
              <div tabIndex={0} role="button" className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Link to="/">
                <img className="w-10 ml-1" src={logoImg} alt="" />
              </Link>
              <Link to="/" className="font-semibold ml-2 text-xl">
                GameHub
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user && user ? (
              <div className="flex gap-2 items-center justify-center">
                <div className="relative group">
                  <Link to="/profile">
                    <img
                      className="w-10 h-10 rounded-full border-3 border-blue-500"
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  </Link>
                  {/* Tooltip */}
                  <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {user.displayName}
                  </span>
                </div>

                <button
                  onClick={haldleSignOut}
                  className="btn bg-[#155DFC] text-white"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/auth-register"
                  className="btn bg-[#155DFC] text-white"
                >
                  Register
                </Link>
                <Link to="/auth-login" className="btn bg-[#155DFC] text-white">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
