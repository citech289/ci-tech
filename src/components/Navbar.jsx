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
    <div className="fixed top-0 left-0 w-full z-6 bg-white shadow-md   items-center mt-0 ">
      {/* <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-2 md:px-10"> */}

      {/* <div className="flex items-center "> */}
      <Link to="/" className="flex-shrink-0">
        <img
          src="Ci-stem.svg"
          alt="navbar-logo"
          className="h-12 md:h-16 w-auto cursor-pointer rounded-md mt-2 mb-2 ml-4"
        />
      </Link>
      <h2 className="hidden text-[#2e5c84] md:block text-base md:text-4xl font-medium  text-center w-full -mt-17">
        Ci-STEM Information Technology Services Private Limited
      </h2>
      {/* </div> */}

      {/* Second Line: Navigation */}
      {/* <div className="hidden md:flex flex-grow justify-center"> */}
      <ul className="hidden md:flex flex-wrap items-center justify-center gap-x-8 text-[#2e5c84] whitespace-nowrap mt-1">
        <li className="relative group">
          <Link
            to="/About"
            className="cursor-pointer hover:text-gray-300 flex items-center gap-1"
          >
            <FaBook /> About Us
            <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
          </Link>
          <div className="absolute top-4.5 left-0 mt-1 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50 transition duration-300">
            <Link to="/About" className="block px-4 py-2 hover:bg-gray-100">
              Company
            </Link>
            {/* <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
              Leadership
            </Link> */}
            <div className="relative group/leadership">
              <Link
                to="/"
                className=" px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
              >
                Leadership
                <IoMdArrowDropdown className="ml-2" />
              </Link>

              {/* Nested Dropdown */}
              <div className="absolute left-full top-0 ml-1 transform transition-all hidden group-hover/leadership:block bg-white shadow-md rounded p-2 w-40">
                <Link to="/CEO" className="block px-4 py-2 hover:bg-gray-100">
                  CEO
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Board
                </Link>
              </div>
            </div>

            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
              Events
            </Link>
          </div>
        </li>
        <li className="relative group">
          <Link
            to="/Training"
            className="cursor-pointer hover:text-gray-300 flex items-center gap-1"
          >
            <FaCalendarAlt /> Training
            <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/Development"
            className="cursor-pointer hover:text-gray-300 flex items-center gap-1"
          >
            <FaBook /> Development
            <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
          </Link>
          <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50 transition duration-300">
            <Link
              to="/Development"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Blockchain Development
            </Link>
            <Link
              to="/Development"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Web Development
            </Link>
            <Link
              to="/Development"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Mobile Development
            </Link>
            <Link
              to="/Development"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Digital Marketing
            </Link>
          </div>
        </li>
        <li className="relative group">
          <Link
            to="/"
            className="cursor-pointer hover:text-gray-300 flex items-center gap-1"
          >
            <FaBook /> Internship
            <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
          </Link>

          <div className="absolute top-full left-0 mt-0 hidden group-hover:grid grid-cols-2 gap-2 bg-white text-black shadow-md rounded-md p-4 z-50 w-[500px]">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Blockchain Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              MERN Stack Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Java Full Stack Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Web Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Java Backend Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              DevOps
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Human Resources Management
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Mobile Development
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Data Analytics
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Business Analytics
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Data Science with AI
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              BI and Visualization
            </Link>
            <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
              Digital Marketing
            </Link>
          </div>
        </li>

        <li className="relative group">
          <Link
            to="/Staff"
            className="cursor-pointer hover:text-gray-300 flex items-center gap-1"
          >
            <FaCalendarAlt /> Staffing
            <IoMdArrowDropdown className="inline-block ml-1 group-hover:rotate-180 duration-200 text-2xl" />
          </Link>
        </li>

        <li>
          <Link
            to="/Carrer"
            className="cursor-pointer hover:text-gray-300  flex items-center gap-1"
          >
            <FaPenSquare /> Career
          </Link>
        </li>

        <li>
          <Link
            to="/ContactUs"
            className="cursor-pointer hover:text-gray-300  flex items-center gap-1"
          >
            <FaMapMarkerAlt /> Contact Us
          </Link>
        </li>

        {/* <li>
          <Link
            to="/"
            className="cursor-pointer px-4 bg-transparent hover:text-gray-300  flex items-center gap-1"
          >
            <FaPhoneAlt className="hover:text-gray-300 " /> +918910363873
          </Link>
        </li> */}
      </ul>
      {/* </div> */}

      {/* Mobile Menu Icon */}
      <img
        onClick={() => setShowMobileMenu(true)}
        src={assets.menu_icon}
        className="md:hidden w-7 cursor-pointer filter invert absolute top-6 right-6"
        alt="menu"
      />
      {/* </div> */}

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-70" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-[#2e5c84] text-white transition-all duration-200  rounded-lg`}
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
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/About"
            className="px-4 py-2"
          >
            About Us
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/Training"
            className="px-4 py-2"
          >
            Training
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className="px-4 py-2"
          >
            Staffing
          </Link>

          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className="px-4 py-2"
          >
            Development
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/Internship"
            className="px-4 py-2"
          >
            Internship
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            href="#"
            className="px-4 py-2"
          >
            Career
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/ContactUs"
            className="px-4 py-2"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
