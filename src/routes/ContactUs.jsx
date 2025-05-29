import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen  w-full overflow-hidden bg-cover">
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 ">
        <h2 className="text-2xl sm:text-4xl  inline-block max-w-3xl font-semibold pt-20 text-blue-500">
          Contact Us
        </h2>
        <div className="bg-white  rounded-md hover:scale-[1.02] hover:shadow-2xl transform transition duration-300 shadow-md p-2">
          <p className="text-blue-500 pt-5 text-xl">Have Some Questions?</p>
          <p className="">
            Don't hesitate to reach out with any inquiries regarding our
            Programs, Schedules, Instructors, or any other general information.
            Our team will get back to you within 24 hours.
          </p>
          <button className="bg-blue-500 rounded px-2 py-2 text-white hover:bg-blue-600 cursor-pointer border-2">
            Get In Touch
          </button>
        </div>
        <div className="mt-5">
          <span className="text-xl font-medium"> CEO -  Sunit Chaudhuri  +918910363873</span>
          <div className="mt-5"><span className="text-xl font-medium">Branch</span></div>
          
        </div>
        <div className="bg-white rounded-md p-2 mt-4 shadow-md hover:scale-[1.02] hover:shadow-2xl transform transition duration-300 h-auto">
          <span className="text-blue-500 font-medium text-xl">Kolkata</span>
          <p className="p-2">
            Ci-STEM Information Technology Services Private Limited GN-38/5, ANAYA CHAMBERS, 9TH
            FLOOR, SALT LAKE, SECTOR-5, KOLKATA-700091
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
