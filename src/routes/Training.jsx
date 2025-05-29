import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  "All",
  "Analytics",
  "Business Analytics",
  "Data Science",
  "Full Stack",
  "Devops",
  "Human Resource Management",
];

const sections = {
  Analytics: [
    {
      title: "Data Analytics",
      slug: "data-analytics",
      points: [
        "Advance Python, Visualization, SQL",
        "Data Wrangling, statistical methods and EDA",
        "ML models (classification, regression, clustering)",
        "Basics of AI and automation workflows",
      ],
    },
    {
      title: "Business Analytics",
      slug: "business-analytics",
      points: [
        "Analytics & Business Foundations",
        "Statistics & Data analysis, SQL",
        "KPIs, Excel and dashboards",
        "Predictive Modeling using AI",
        "Real-world case studies and scenarios",
      ],
    },
    {
      title: "Data Science with AI",
      slug: "data-science-ai",
      points: [
        "Data analysis and visualization with Python",
        "Statistical modeling and hypothesis testing",
        "Machine learning, Deep Learning & NLP",
        "Model Deployment & Cloud Integration",
        "Real World Applications and cases",
      ],
    },
    {
      title: "BI and Visualization",
       slug: "bi-visualization",
      points: [
        "Create dynamic dashboards and reports",
        "Use DAX for custom calculations",
        "Apply AI visuals like Key Influencers & Q&A",
        "Integrate Python/R for advanced analysis",
        "Share and automate reports in Power BI Service",
      ],
    },
  ],
  "Full Stack": [
    {
      title: "MERN Stack",
      slug: "mern-stack",
      points: [
        "Build UIs with React, HTML, CSS, JavaScript",
        "Create APIs using Node.js and Express.js",
        "Work with Databases using MongoDB and Mongoose",
        "Deploy Apps with Git, Heroku, and REST integration",
      ],
    },
    {
      title: "Java Full Stack",
      slug: "java-full-stack",
      points: [
        "Build UIs using HTML, CSS, JavaScript, and Angular/React",
        "Develop APIs with Java, Spring Boot, and REST",
        "Manage Databases using MySQL and Hibernate",
        "Deploy Applications using Git, Docker, and CI/CD tools",
      ],
    },
  ],
  Devops: [
    {
      title: "DevOps",
            slug: "devops",
      points: [
        "Automate Builds with Git, Jenkins, and Maven",
        "Use Containers via Docker and Kubernetes",
        "Manage Infra using Ansible and Terraform",
        "Deploy & Monitor on AWS with Prometheus/Grafana",
      ],
    },
  ],
  "Human Resource Management": [
    {
      title: "Human Resource Management",
      slug: "hr-management",
      points: ["HR internship and HR Training"],
    },
  ],
};

const Training = () => {
  return (
    <div className="bg-white min-h-screen p-4 mt-25">
      {/* Navigation Bar */}
      <div className="flex justify-left gap-4 flex-wrap border border-black rounded-xl p-4 mb-10 w-fit mx-auto">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 px-6 py-3 rounded-full text-center text-blue-500 text-sm font-semibold hover:bg-gray-700 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Section Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {Object.values(sections)
          .flat()
          .map((card, idx) => (
            <div
              key={idx}
              className="relative group border border-black p-4 w-full md:w-[300px] rounded-md overflow-hidden bg-white"
            >
              {/* Blur Overlay with Buttons */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center gap-3">
                <Link
                  to={`/course/${card.slug}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm cursor-pointer"
                >
                  Course Details
                </Link>
                <Link to={`/roadmap/${card.slug}`} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 text-sm cursor-pointer">
                  Roadmap
                </Link>
              </div>

              {/* Card Content */}
              <div className="relative z-0">
                <h3 className="text-lg font-bold mb-2 text-blue-500">
                  {card.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Training;
