import React from "react";

const features = [
  {
    title: "LIVE CLASSES",
    description:
      "Flourish in a dynamic educational setting with real-time sessions that encourage engagement and deep learning.",
    icon: "/LiveClasses.png",
  },

  {
    title: "INDUSTRY BASED CURRICULUM",
    description:
      "Explore thoroughly with a carefully designed syllabus that traverses the domains of data analytics with accuracy and insight.",
    icon: "/Industry.png",
  },
  {
    title: "HANDS-ON PRACTICAL TRAINING",
    description:
      "Engage deeply with assignments, assessments, and initiatives after each subject, guaranteeing that knowledge blends effortlessly with application.",
    icon: "/Practical.png",
  },
  {
    title: "EASY TO FOLLOW LANGUAGE",
    description:
      "Enjoy the ease of studying in Hinglish, turning complicated ideas into a casual conversation.",
    icon: "/Languages.png",
  },
  {
    title: "ROBUST DOUBT SUPPORT",
    description:
      "Eliminate confusion with strong query assistance, transforming each inquiry into a path toward expertise.",
    icon: "/Doubt.png",
  },
  {
    title: "REAL-TIME PROJECTS",
    description:
      "Enhance your skills with live assignments that advance your hands-on knowledge into the professional realm.",
    icon: "/Project.png",
  },
  {
    title: "DEDICATED JOB PREPARATION",
    description:
      "Leverage the strength of targeted career planning that refines your resume and equips you for your ideal role.",
    icon: "/JobPrepration.png",
  },
  {
    title: "AFFORDABLE FEE STRUCTURE",
    description:
      "Access a wealth of wisdom without spending a fortune, with costs that promote budget-friendliness and worth.",
    icon: "/Fee.png",
  },
];
const JoinThisCourse = () => {
  return (
    <div className="w-full overflow-hidden scroll-smooth ">
      <div className="text-white bg-gray-900 py-12 px-6 md:px-16 mb-0">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 ">
          Why join this Course
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-35 h-35 mx-auto  hover:scale-[1.02] transition transform duration-300"
              />
              <h3 className="font-bold text-sm">{feature.title}</h3>

              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Join Now</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              placeholder="Your contact number"
            />
          </div>
          <button
            type="submit"
            className="w-1/5 px-4 py-2 bg-[#2e5c84] text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinThisCourse;
