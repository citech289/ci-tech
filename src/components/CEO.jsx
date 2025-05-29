import React from "react";
import ceoImage from "../assets/Sunit-Chaudhuri.jpg";
import { ImWhatsapp } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const CEO = () => {
  return (
    <div className="bg-white max-w-8xl mx-auto px-4 py-12">
      <div className="bg-white mt-4 border border-gray-300 rounded-md p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="text-center lg:text-left">
            <img
              src={ceoImage}
              alt="Sunit Chaudhuri - CEO"
              className="w-full lg:w-80 rounded-md shadow-md hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
            />
            <div className="text-center mt-6">
              <p className="text-xl font-semibold mt-4">Sunit Chaudhuri</p>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>

          <div className="text-gray-800 text-lg leading-relaxed">
            {/* <h2 className="text-2xl font-semibold mb-4">
              Message from the CEO
            </h2> */}
            <p className="mb-4">
              "As the CEO, I want to personally welcome you to our organization.
              Your unique perspectives and skills will be instrumental to our
              future success."
            </p>
            <p className="mb-4">
              "It's a pleasure to welcome you to our amazing team. We have great
              things in store, and I'm excited to have you contribute to our
              journey."
            </p>
            <p className="mb-4">
              CI-STEM Information Technology Services Private Limited is an
              innovative and growth-driven IT support and services company that
              specializes in providing high-quality training, internship
              opportunities, and client-side live project experiences.
            </p>
            <p className="mb-4">
              With a strong focus on empowering the next generation of
              technology professionals, we bridge the gap between academic
              education and practical industry demands. We offer
              industry-relevant training programs for college students, fresh
              graduates, and aspiring developers.
            </p>
            <p className="mb-4">
              Our curriculum covers key technologies like Java, MERN Stack,
              Python, Web Development, Analytics, and Data Science with AI and Human Resources. We
              are involved in Software Development, Research, and Training with
              many partners, and we also operate in the staffing domain.
            </p>
            <p className="mb-4">
              In the end, I want to clearly say that I aim to eliminate
              unemployment by providing opportunities for everyone. Please
              believe in my principle:{" "}
              <strong>LEARN, LEARN AND EARN, EARN</strong>.
            </p>
            <p className="mb-4">
              Upgrade your technical knowledge every day. Believe me — if you
              stay up-to-date with the latest technologies, you will find great
              job opportunities. So keep learning, keep growing.
            </p>
            <p className="mb-4">Chief Executive Officer(CEO)</p>
            <p className="mb-4 font-medium">
              CI-STEM INFORMATION TECHNOLOGY SERVICES PRIVATE LIMITED
            </p>
            <p className="mb-4 font-medium">
              GN 38/5, ANAYA CHAMBERS,9TH FLOOR, Sector V, Salt lake
              City, Kolkata, West Bengal 700091
            </p>
            <p className="mb-2 font-medium flex items-center">
              <CiPhone className=" text-2xl mr-2 text-blue-700" /> 8910363873
            </p>
            <p className="mb-2 flex items-center">
              {" "}
              <ImWhatsapp className="mr-2 text-green-500 text-xl" />
              8334001667
            </p>
            <p className="mb-2 flex items-center">
              {" "}
              <CiLinkedin className="mr-2 text-blue-800 text-2xl" />
              <a
                href="https://www.linkedin.com/in/sunitchaudhuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;
