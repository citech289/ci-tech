import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

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
    <div className="fixed top-0 left-0 w-full  z-10 bg-gray-200">
      <div className="container m-auto flex  justify-between items-center py-4 px-6 md:px-20 lg:px-32 gap-4">
        <img
          src="logo.png"
          alt="navbar-logo"
          className="w-25 h-auto flex-shrink-0 cursor-pointer"
        />

        <ul className="hidden md:flex flex-nowrap items-center justify-center gap-x-6 text-black whitespace-nowrap">
          {/* Home */}
          <li className="relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>
          </li>
          
          

          {/* About */}
          <li className="relative group">
            <Link to="/" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
             <FaBook /> Courses
            </Link>
          </li>

          {/* Employer */}
          <li className="relative group">
            <Link to="/Batches" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
             <FaCalendarAlt /> Batches
            </Link>
          </li>
          <li className="relative group">
            <Link to="/" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
             <FaCalendarAlt /> Corporates
            </Link>
          </li>

          {/* Job Opportunities */}
          <li className="relative group">
            <Link to="/ContactUs" className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
             <FaMapMarkerAlt /> Contact
            </Link>
          </li>

          <li>
            <Link to="/" className="cursor-pointer  hover:text-blue-800 flex items-center gap-1">
             <FaPenSquare /> Enquiry
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="cursor-pointer  px-4 bg-transparent hover:text-blue-800 
               flex items-center gap-1 "
            >
             <FaPhoneAlt className=" hover:text-blue-800"/> 8334001667
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="cursor-pointer  px-4 bg-transparent hover:text-blue-800 
               flex items-center gap-1 "
            >
             <FaPhoneAlt className=" hover:text-blue-800"/> 8334001667
            </Link>
          </li>
          
          
        </ul>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer filter invert"
        />
      </div>

      {/* ------------- Mobile-Menu-------------- */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 
      overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Courses
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Batches
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Corporates
          </a>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="ContactUs"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Contact
          </Link>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Enquiry
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
