import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const testimonials = [
  {
    name: "Divya Singh",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Indian woman image
    course: "Automation Testing",
    content:
      "The Automation Testing course was incredibly detailed and taught in a way that was both engaging and effective. I learned not only the basics but also advanced techniques and hands-on experience with real-world tools.",
  },
  {
    name: "Gopal Krishna Vasudevan",
    image: "https://randomuser.me/api/portraits/men/36.jpg", // Indian man image
    course: "MERN Full Stack",
    content:
      "The depth of knowledge I gained from the MERN Full Stack course is invaluable. The course structure was perfect for understanding the nuances of full-stack development. The mentors were amazing and always ready to help.",
  },
  {
    name: "Sneha Gupta",
    image: "https://randomuser.me/api/portraits/women/65.jpg", // Indian woman image
    course: "Automation",
    content:
      "The Automation course was thorough and very informative. I learned a lot about different automation tools and techniques, which have made me a more efficient and effective tester in my current role. Highly recommended!",
  },
  {
    name: "Ravi Sharma",
    image: "https://randomuser.me/api/portraits/men/44.jpg", // Indian man image
    course: "Data Science",
    content:
      "The Data Science course was insightful and provided me with the skills to analyze complex data. It has enabled me to apply machine learning algorithms effectively in my work.",
  },
  {
    name: "Pooja Mehta",
    image: "https://randomuser.me/api/portraits/women/12.jpg", // Indian woman image
    course: "Cybersecurity",
    content:
      "The Cybersecurity course was extremely well-organized, with a perfect blend of theory and practical sessions. It made me feel confident in securing online systems and protecting data.",
  },
  {
    name: "Harsh Yadav",
    image: "https://randomuser.me/api/portraits/men/22.jpg", // Indian man image
    course: "Full Stack Web Development",
    content:
      "The Full Stack Web Development course gave me the tools to build complete applications from scratch. I learned both front-end and back-end technologies, making me a versatile developer.",
  },
  {
    name: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/50.jpg", // Indian woman image
    course: "Cloud Computing",
    content:
      "The Cloud Computing course opened my eyes to the potential of cloud technologies. I gained hands-on experience with AWS, which has been a game-changer in my professional growth.",
  },
  {
    name: "Amit Desai",
    image: "https://randomuser.me/api/portraits/men/51.jpg", // Indian man image
    course: "Machine Learning",
    content:
      "The Machine Learning course was phenomenal. It provided me with deep insights into ML algorithms and how to apply them to solve real-world problems. A must for anyone serious about AI.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
      <div className="h-1 w-16 bg-orange-500 mb-6"></div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-hidden scrollbar-hide w-full"
        >
          {testimonials.map((testimonial, index) => {
            const isExpanded = expanded[index];
            const shortText = testimonial.content.slice(0, 100) + "...";
            return (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md w-80 bg-blue-100 text-center flex-shrink-0"
              >
                <div className="text-6xl text-orange-300 mb-4">“</div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto mb-2 w-24 h-24 rounded-full border-4 border-orange-400"
                />
                <h3 className="font-bold text-xl text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="italic text-left mt-4 mb-2 text-sm">
                  {isExpanded ? testimonial.content : shortText}
                </p>
                <p
                  onClick={() => toggleReadMore(index)}
                  className="text-orange-500 font-semibold cursor-pointer text-right"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </p>
              </div>
            );
          })}
        </div>

        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;