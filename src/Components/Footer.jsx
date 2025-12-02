import React from "react";
import { Link } from "react-router";
import logoImg from "/game-hub.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer sm:footer-horizontal  text-base-content p-10 container mx-auto">
        <aside>
          <div className="flex justify-center items-center">
            <Link to="/">
              <img className="w-10 ml-1" src={logoImg} alt="" />
            </Link>
            <Link to="/" className="font-semibold ml-2 text-xl">
              GameHub
            </Link>
          </div>
          <p className="">
            A Game Library
            <br />
          </p>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-600 text-xl">
            <a
              href="https://github.com/fardin-sojon"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-gray-800 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/fardin-sojon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/fardinsojon"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://x.com/fardin_sojon" target="_blank" rel="noreferrer">
              <FaXTwitter className="hover:text-black transition-colors" />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about-us" className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <span className="flex justify-center">
        {" "}
        &copy; 2025 All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
