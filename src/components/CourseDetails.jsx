import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { roadmapContent } from "../assets/roadmapContent";

// Ideally move this to a separate file like courseData.js
const navItems = [
  { name: "All", slug: "" },
  { name: "Analytics", slug: "data-analytics" },
  { name: "Business Analytics", slug: "business-analytics" },
  { name: "Data Science", slug: "data-science-ai" },
  { name: "Full Stack", slug: "mern-stack" },
  { name: "Devops", slug: "devops" },
  { name: "Human Resource Management", slug: "hr-management" },
];

const sections = {
  Analytics: [
    {
      title: "Data Analytics using Python & AI",
      slug: "data-analytics",
      description:
        "Designed by industry experts, this comprehensive training builds a strong foundation in data analysis, visualization, and AI-driven insights. Whether you're a beginner or a professional looking to advance your career, this program blends practical tools with real-world business applications to help you make data-backed decisions with confidence.",

      image: "/Data Analyst Banner.png",
    },
    {
      title: "Business Analytics",
      slug: "business-analytics",
      description:
        "Crafted by leading professionals, this all-encompassing Business Analytics program equips you with the skills to interpret data, uncover trends, and drive strategic decisions. From foundational concepts to advanced analytical techniques, the training combines hands-on tools with practical case studies, empowering both beginners and seasoned professionals to turn data into impactful business insights.",
      image: "/Business Analyst.png",
    },
    {
      title: "Data Science with AI",
      slug: "data-science-ai",
      description:
        "Developed by industry experts, this comprehensive program equips you with core competencies in data science, machine learning, and artificial intelligence. Covering everything from data preparation to creating smart models, it offers hands-on learning with real-world data. Perfect for both newcomers and experienced professionals, the course connects theoretical concepts with practical use cases to help you innovate and make informed, data-driven choices.",
      image: "/Data-Science.png",
    },
    {
      title: "BI and Visualization",
      slug: "bi-visualization",
      description:
        "Developed by industry leaders, this all-inclusive program empowers you with essential skills in business intelligence and data visualization. From gathering and analyzing data to crafting insightful, interactive dashboards, you'll gain hands-on experience with leading BI tools and techniques. Designed for both beginners and seasoned professionals, the course bridges theory with real-world scenarios, enabling you to transform complex data into clear, actionable insights that drive smarter business decisions.",
      image: "/powerbi.png",
    },
    {
      title: "Mern Stack",
      slug: "mern-stack",
      description:
        "Developed by seasoned professionals, this all-inclusive MERN Stack program empowers you with essential skills in full-stack web development using MongoDB, Express.js, React.js, and Node.js. From building responsive front-end interfaces to designing scalable back-end systems and integrating databases, the course delivers a hands-on, project-based learning experience. Ideal for both beginners and experienced developers, it bridges foundational concepts with real-world applications—preparing you to build dynamic, high-performance web applications from start to finish.",
      image: "/MERN stack Banner.png",
    },
    {
      title: "Java Full Stack",
      slug: "java-full-stack",
      description:
        "Crafted by industry experts, this comprehensive Java Full-Stack Development program equips you with the core competencies needed to master both front-end and back-end technologies using Java. Covering everything from building interactive user interfaces with HTML, CSS, and JavaScript frameworks, to developing robust server-side applications with Spring Boot and managing databases with MySQL or MongoDB, the course offers a practical, project-driven learning journey. Perfect for aspiring developers and seasoned professionals alike, it blends theoretical foundations with real-world coding challenges—empowering you to build scalable, secure, and high-performance web applications from the ground up.",
      image: "/Java-Full-Stack.png",
    },
    {
      title: "Devops",
      slug: "devops",
      description:
        "Crafted by industry experts, this comprehensive DevOps program equips you with the core principles and tools needed to streamline software development and IT operations. Covering everything from continuous integration and deployment (CI/CD) to infrastructure as code, containerization with Docker, orchestration with Kubernetes, and cloud services like AWS or Azure, the course offers immersive, hands-on learning. Whether you're new to DevOps or looking to level up your skills, this program bridges the gap between development and operations—empowering you to build, deploy, and manage scalable, reliable systems in real-world environments.",
      image: "/Devops.png",
    },
    {
      title: "Human Resource Management",
      slug: "hr-management",
      description:
        "Designed by seasoned HR professionals, this comprehensive training program lays a solid foundation in modern human resource practices, employee engagement, and organizational development. Whether you're just starting your career or aiming to elevate your HR expertise, this course combines practical tools with real-world case studies to help you manage talent effectively, foster a positive workplace culture, and align HR strategies with business goals.",
      image: "/HR.png",
    },
  ],
};

const CourseDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allCourses = Object.values(sections).flat();
  const course = allCourses.find((c) => c.slug === slug);
  const roadmap = roadmapContent[slug];

  const handleNavClick = (slug) => {
    if (slug) {
      navigate(`/course/${slug}`);
    } else {
      navigate(`/training`); // or homepage or default course
    }
  };

  if (!course) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2>404 - Course Not Found</h2>
        <p>
          No course found for <strong>{slug}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Navigation Bar */}
      <div className="flex justify-left gap-4 flex-wrap border border-black rounded-xl p-4 mb-8 mt-20 w-fit mx-auto">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavClick(item.slug)}
            className="bg-gray-800 px-6 py-3 rounded-full text-center text-blue-500 text-sm font-semibold hover:bg-gray-700 cursor-pointer"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Course Details Section */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-medium text-orange-500 mb-4">
            {course.title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base mt-4 leading-relaxed">
            {course.description}
          </p>
          {course.points && course.points.length > 0 && (
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-gray-600">
              {course.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section */}
        {course.image && (
          <div className="md:w-1/3 flex justify-center">
            <img
              src={course.image}
              alt={course.title}
              className="w-auto md:h-[200px] object-cover rounded-md hover:scale-[1.02] transition transform duration-300"
            />
          </div>
        )}
        {/* Course Roadmap Section */}
      </div>
      {roadmap && (
        <div className="mt-10 flex flex-col items-center w-full ">
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">
            {roadmap.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 md:gap-x-6 lg:gap-x-8 max-w-7xl"
>
            {roadmap.phases.map((phase, index) => (
              <div
                key={index}
                className="border-l-4 border-orange-500 pl-4 bg-gray-50 p-4 rounded-md shadow-sm"
              >
                <h4 className="text-md font-bold text-[#2e5c84]">
                  {phase.phase}
                </h4>
                {phase.duration && (
                  <p className="text-sm text-gray-600 italic">
                    {phase.duration}
                  </p>
                )}
                <p className="text-sm mt-1 font-medium">{phase.goal}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  {phase.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
