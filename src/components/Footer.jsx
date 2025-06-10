import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { CiLinkedin, CiPhone } from "react-icons/ci";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", url: "https://citechspl.com/About" },
        { name: "Staffing", url: "#" },
        { name: "Training", url: "#" },
        { name: "Development", url: "#" },
        { name: "Career", url: "#" },
      ],
    },
    {
      title: "Info",
      links: [
        { name: "About Us", url: "#" },
        { name: "Contact Us", url: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          icon: <CiLinkedin size={25} />,
          url: "https://www.linkedin.com/company/ci-stem-information-technology-services-private-limited/",
        },
        { icon: <FaTwitter size={25} />, url: "#" },
        {
          icon: <FaFacebook size={25} />,
          url: "https://www.facebook.com/share/1FBd7MDdch/",
        },
        {
          icon: <FaYoutube size={25} />,
          url: "https://www.youtube.com/@CI-STEMITSERVICESPVTLTD",
        },
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#2e5c84] text-black">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white text-white ">
        <div>
          <img
            className="w-34 md:w-32 rounded-md transition-transform duration-300 hover:scale-105"
            src="FinalLogo.jpg"
            alt="companylogo"
          />
          <p className="max-w-[410px] mt-6">
            <b>Company:</b> Ci-STEM Information Technology Services
            Private Limited
          </p>
          <p className="max-w-[410px] mt-6">
            9th floor, Anaya Chambers, GN 38/5, GN Block, Sector V, Bidhannagar,
            Kolkata, West Bengal 700091
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-white md:mb-5 mb-2 ">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 ">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-orange-400 flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                    >
                      {"icon" in link ? link.icon : link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-white">
        Copyright 2025 © Ci-STEM Information Technology Services Private Limited
      </p>
    </div>
  );
};

export default Footer;
