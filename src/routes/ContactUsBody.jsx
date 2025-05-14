import React from "react";

const branches = [
  { name: "Bangalore", icon: "🏛️" },
  { name: "Delhi", icon: "🏰" },
  { name: "Gurugram", icon: "🕌" },
];

const ContactUsBody = () => {
  return (
    <div className="bg-white md:px-20 lg:px-32 px-6 py-16">
      <div className=" mx-auto max-w-6xl">
       
        <div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-3xl md-text-5xl font-bold text-black flex items-center">
              Reach Out to Talent Track Services – Your Leading Manpower Agency
            </h2>
          </div>
          <p className=" mt-4 text-gray-600">
            As a Leading Manpower Consultancy in India, Talent Track Services is
            dedicated to connecting you with top-tier talent. Whether you’re
            looking for a Top Recruitment Agency or Top Head-hunters, we are
            here to serve your hiring needs.
          </p>

          <p className=" mt-4 text-gray-600">
            As a Leading Manpower Consultancy in India, Talent Track Services is
            dedicated to connecting you with top-tier talent. Whether you’re
            looking for a Top Recruitment Agency or Top Head-hunters, we are
            here to serve your hiring needs.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
