import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaClipboardList,
  FaPenSquare,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-6 bg-gray-200 shadow-md">
      <div className="container mx-auto px-4 md:px-20 lg:px-20 py-2">
        {/* First Line: Logo and Company Name */}
        <div className="flex  gap-4">
          <img
            src="FinalLogo.jpg"
            alt="navbar-logo"
            className="w-30 h-auto  cursor-pointer rounded-md"
          />
          <h2 className="hidden md:block text-base md:text-4xl font-medium  text-center w-full">
            CI-STEM INFORMATION TECHNOLOGY SERVICES PRIVATE LIMITED
          </h2>
          
        </div>

        {/* Second Line: Navigation */}
        <ul className="hidden md:flex flex-wrap items-center justify-center gap-x-6 mt-0 text-black whitespace-nowrap">
          <li className="relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>
          </li>

          <li className="relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
            >
              <FaBook /> Services
              <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50 transition duration-300">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Blockchain Development</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Mobile Development</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</Link>
            </div>
          </li>

          <li className="relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
            >
              <FaCalendarAlt /> Industries
              <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Staffing</Link>
              <Link to="/Training" className="block px-4 py-2 hover:bg-gray-100">Training</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Development</Link>
            </div>
          </li>

          <li className="relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
            >
              <FaCalendarAlt /> Company
              <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Events</Link>
            </div>
          </li>

          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
              <FaPenSquare /> Career
            </Link>
          </li>

          <li>
            <Link to="/ContactUs" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
              <FaMapMarkerAlt /> Contact
            </Link>
          </li>

          <li>
            <Link to="/" className="cursor-pointer px-4 bg-transparent hover:text-blue-800 flex items-center gap-1">
              <FaPhoneAlt className="hover:text-blue-800" /> +918910363873
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer filter invert absolute top-6 right-6"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#" className="px-4 py-2">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#" className="px-4 py-2">Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#" className="px-4 py-2">Industries</a>
          <a onClick={() => setShowMobileMenu(false)} href="#" className="px-4 py-2">Company</a>
          <Link onClick={() => setShowMobileMenu(false)} to="/ContactUs" className="px-4 py-2">Career</Link>
          <a onClick={() => setShowMobileMenu(false)} href="#" className="px-4 py-2">Contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
