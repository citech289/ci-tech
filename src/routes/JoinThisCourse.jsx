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
  );
};

export default JoinThisCourse;
