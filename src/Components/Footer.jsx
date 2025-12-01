import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer sm:footer-horizontal  text-base-content p-10 container mx-auto">
        <aside>
        <h2 className="text-3xl font-bold">GameHub</h2>
          <p className="">
            A Game Library
            <br />
          </p>
           <span> &copy; 2025 All Rights Reserved</span>
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
          <Link to="/about-us" className="link link-hover">About us</Link>
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
    </div>
  );
};

export default Footer;
