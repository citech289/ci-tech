import React from 'react'
import { assets } from "../assets/assets";
const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "courses", "Batches", "Corporates"]
        },
        {
            title: "Info",
            links: ["About Us", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-blue-300 text-black">
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-white">
        <div>
            <img className="w-34 md:w-32 rounded-md" src="FinalLogo.jpg" alt="companylogo" />
            <p className="max-w-[410px] mt-6">
            <b>Address:</b> CI-STEM INFORMATION TECHNOLOGY SERVICES PRIVATE LIMITED
            GN-38/5, ANAYA CHAMBERS, 9TH FLOOR, SALT LAKE, SECTOR-5, KOLKATA-70091
            </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
                <div key={index}>
                    <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                    <ul className="text-sm space-y-1">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:underline transition">{link}</a>
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
  )
}

export default Footer