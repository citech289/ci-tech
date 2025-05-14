import React, { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import Java from "../assets/java1.jpg";
import HTML from "../assets/HTML2.jpg";
import Database from "../assets/Database.jpg";
import Spring from "../assets/spring.jpg";

import ReactIcon from "../assets/react2.jpg";
import Angular from "../assets/angular.jpg";
// import Express from "../assets/express-js.jpg";
import Node from "../assets/node-js.jpg";
// import MongoDB from "../assets/mango-db.jpg";

import Python from "../assets/Python.jpg";
// import ML from "../assets/ML.png";

import DevOps from "../assets/Devopse.jpg";

// Course Data
const courses = [
  {
    title: "Java Full Stack",
    icons: [Java, HTML, Database, Spring],
    description:
      "The Java Full Stack course provides job-oriented training with in-depth knowledge of Java, Spring, HTML, and databases. Learn both front-end and back-end development to build enterprise-level applications and gain industry-relevant skills.",
    type: "java",
  },
  {
    title: "MEAN/MERN Stack",
    icons: [ReactIcon, Angular, Express, Node, MongoDB],
    description:
      "This course covers full-stack development using the MEAN and MERN stacks. Learn to build scalable web and mobile applications with MongoDB, Express.js, Angular/React, and Node.js, utilizing JavaScript at every level of development.",
    type: "mean-mern",
  },
  {
    title: "Data Science/ML",
    icons: [Python, Database, ML],
    description:
      "Master data science with Python, focusing on data analysis, machine learning, statistics, and visualization tools like Matplotlib, Pandas, and Scikit-Learn. Learn how to process, analyze, and visualize data to create meaningful insights.",
    type: "data-science",
  },
  {
    title: "DevOps",
    icons: [DevOps],
    description:
      "Gain expertise in DevOps practices with tools like Docker, Kubernetes, Jenkins, and Git. This course covers containerization, continuous integration, continuous deployment (CI/CD), and infrastructure as code (IaC), preparing you for modern IT environments.",
    type: "devops",
  },
  {
    title: "HR Development",
    icons: [],
    description:
      "Learn key HR functions, including talent acquisition, employee relations, compliance, and training. Develop the leadership and communication skills necessary to manage teams, foster organizational growth, and drive HR initiatives effectively.",
    type: "hr-development",
  },
];

// Card Components for Different Course Types
const JavaCourseCard = ({ title, description, icons }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="tech-icon"
            className="h-6 w-6 object-contain"
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
      {description}
    </p>
    <div className="flex justify-between gap-2 mt-auto">
      <Link
        to="Details"
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Details
      </Link>
      <Link
        to="Enroll"
        className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-400 flex items-center gap-1"
      >
        👤 Enroll
      </Link>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        Batches
      </button>
    </div>
  </div>
);

const MernCourseCard = ({ title, description, icons }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="tech-icon"
            className="h-6 w-6 object-contain"
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
      {description}
    </p>
    <div className="flex justify-between gap-2 mt-auto">
      <Link
        to="Mean"
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Details
      </Link>
      <Link
        to="Enroll"
        className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-400 flex items-center gap-1"
      >
        👤 Enroll
      </Link>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        Batches
      </button>
    </div>
  </div>
);

const DataScienceCourseCard = ({ title, description, icons }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="tech-icon"
            className="h-6 w-6 object-contain"
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
      {description}
    </p>
    <div className="flex justify-between gap-2 mt-auto">
      <Link
        to="DataScience"
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Details
      </Link>
      <Link
        to="Enroll"
        className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-400 flex items-center gap-1"
      >
        👤 Enroll
      </Link>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        Batches
      </button>
    </div>
  </div>
);

const DevOpsCourseCard = ({ title, description, icons }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
      <div className="flex gap-2 flex-wrap">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="tech-icon"
            className="h-6 w-6 object-contain"
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
      {description}
    </p>
    <div className="flex justify-between gap-2 mt-auto">
      <Link
        to="Devops"
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Details
      </Link>
      <Link
        to="Enroll"
        className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-400 flex items-center gap-1"
      >
        👤 Enroll
      </Link>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        Batches
      </button>
    </div>
  </div>
);

// HR Development Course Card (no icons)
const HrDevelopmentCourseCard = ({ title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
    </div>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
      {description}
    </p>
    <div className="flex justify-between gap-2 mt-auto">
      <Link
        to="Details"
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Details
      </Link>
      <Link
        to="Enroll"
        className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-400 flex items-center gap-1"
      >
        👤 Enroll
      </Link>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        Batches
      </button>
    </div>
  </div>
);

// Main Component
export default function Courselist() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-1">Courses</h1>
        <p className="text-gray-600 text-lg mb-6">
          The Largest Selection Of Courses
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by Course Name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="text-lg font-semibold text-orange-500 mb-6 text-center">
        Total Courses: {filteredCourses.length}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.map((course, i) => {
          switch (course.type) {
            case "java":
              return <JavaCourseCard key={i} {...course} />;
            case "mean-mern":
              return <MernCourseCard key={i} {...course} />;
            case "data-science":
              return <DataScienceCourseCard key={i} {...course} />;
            case "devops":
              return <DevOpsCourseCard key={i} {...course} />;
            case "hr-development":
              return <HrDevelopmentCourseCard key={i} {...course} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
