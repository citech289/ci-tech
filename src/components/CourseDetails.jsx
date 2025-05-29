import { useParams } from "react-router-dom";
// This data should ideally be imported from a separate file like `courseData.js`
const sections = {
  Analytics: [
    {
      title: "Data Analytics using Python & AI",
      slug: "data-analytics",
      description:
        "Designed by industry experts, this comprehensive training builds a strong foundation in data analysis, visualization, and AI-driven insights. Whether you're a beginner or a professional looking to advance your career, this program blends practical tools with real-world business applications to help you make data-backed decisions with confidence",
      points: [
        "Advance Python, Visualization, SQL",
        "Data Wrangling, statistical methods and EDA",
        "ML models (classification, regression, clustering)",
        "Basics of AI and automation workflows",
      ],
      image: "/DA.png",
    },
    {
      title: "Business Analytics",
      slug: "business-analytics",
      description:
        "Crafted by leading professionals, this all-encompassing Business Analytics program equips you with the skills to interpret data, uncover trends, and drive strategic decisions. From foundational concepts to advanced analytical techniques, the training combines hands-on tools with practical case studies, empowering both beginners and seasoned professionals to turn data into impactful business insights.",
      points: [
        "Analytics & Business Foundations",
        "Statistics & Data analysis, SQL",
        "KPIs, Excel and dashboards",
        "Predictive Modeling using AI",
        "Real-world case studies and scenarios",
      ],
      image: "/BA.png",
    },
    {
      title: "Data Science with AI",
      slug: "data-science-ai",
      description:
        "Developed by industry experts, this comprehensive program equips you with core competencies in data science, machine learning, and artificial intelligence. Covering everything from data preparation to creating smart models, it offers hands-on learning with real-world data. Perfect for both newcomers and experienced professionals, the course connects theoretical concepts with practical use cases to help you innovate and make informed, data-driven choices.",
      image: "/DS.png",
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
      image: "/MERN.png",
    },
    {
      title: "Java Full Stack",
      slug: "java-full-stack",
      description:
        "Crafted by industry experts, this comprehensive Java Full-Stack Development program equips you with the core competencies needed to master both front-end and back-end technologies using Java. Covering everything from building interactive user interfaces with HTML, CSS, and JavaScript frameworks, to developing robust server-side applications with Spring Boot and managing databases with MySQL or MongoDB, the course offers a practical, project-driven learning journey. Perfect for aspiring developers and seasoned professionals alike, it blends theoretical foundations with real-world coding challenges—empowering you to build scalable, secure, and high-performance web applications from the ground up.",
      image: "/JAVA.png",
    },

    {
      title: "Devops",
      slug: "devops",
      description:
        "Crafted by industry experts, this comprehensive DevOps program equips you with the core principles and tools needed to streamline software development and IT operations. Covering everything from continuous integration and deployment (CI/CD) to infrastructure as code, containerization with Docker, orchestration with Kubernetes, and cloud services like AWS or Azure, the course offers immersive, hands-on learning. Whether you're new to DevOps or looking to level up your skills, this program bridges the gap between development and operations—empowering you to build, deploy, and manage scalable, reliable systems in real-world environments.",
      image: "/DEVOPS.png",
    },
    {
      title: "Human Resource Management",
      // slug: "hr-management",
      description:
        "HR management involves overseeing employee recruitment, training, performance, and workplace culture. It ensures compliance with labor laws, fosters employee engagement, and supports organizational goals. HR professionals manage payroll, benefits, and conflict resolution, creating a productive work environment that aligns with company values and enhances overall employee satisfaction and development.",
      // image: "/DEVOPS.png",
    },
  ],
};

const CourseDetails = () => {
  const { slug } = useParams();

  const allCourses = Object.values(sections).flat();
  const course = allCourses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2>404 - Course Not Found</h2>
        <p>No course found {slug}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between p-8 space-y-6 md:space-y-0">
      {/* Left section */}
      <div className="md:w-2/3 mt-18">
        <h2 className="text- md:text-3xl font-medium text-blue-600 mb-4">
          {course.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4 landing-relaxed">
          {course.description}
        </p>
        {/* <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-gray-600">
          {course.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul> */}
      </div>

      {/* Right section */}
      <div className="md:w-1/3 flex justify-center">
        <div className="w-auto h-48 flex items-center justify-center  md:mt-25">
          <img
            src={course.image}
            alt={course.title}
            className="w-auto md:h-[200px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
