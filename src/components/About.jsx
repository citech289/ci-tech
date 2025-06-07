const About = () => {
  const features = [
    {
      title: 'Complete Digital Solutions',
      description:
        'A one-stop digital hub that reduces costs and ensures total project control with excellent quality and timely execution.',
    },
    {
      title: 'Innovation at the Core',
      description:
        'Innovation and high standards are at the heart of what we do. We help clients stay ahead by breaking conventional limits.',
    },
    {
      title: 'Digitally Native',
      description:
        'We’ve provided future-ready digital solutions to keep businesses modern, competitive, and resilient.',
    },
    {
      title: 'Scalable Enterprise Solutions',
      description:
        'Proven experience in delivering scalable, mission-critical digital solutions for global organizations.',
    },
    {
      title: 'Tech Trailblazers',
      description:
        'We disrupt, we build, and we teach — nurturing talent and pioneering new applications of technology.',
    },
    {
      title: 'Client-Centric Flexibility',
      description:
        'Our customer-first approach builds strong partnerships through adaptable models and value-driven pricing.',
    },
    {
      title: 'Agility Built In',
      description:
        'A compact yet capable team with a flat structure and dynamic work culture ensures quick and effective solutions.',
    },
    {
      title: 'Digital Integration Experts',
      description:
        'We merge innovation and marketing technologies to create modern strategies that strengthen your business.',
    },
  ];

  return (
    <div className="w-full mt-20">
      {/* About Us Header */}
      <div className="bg-white py-12 px-4 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
        <p className="text-xl text-[#2e5c84] font-medium">
        Accelerating your growth with exceptional staffing solutions
        </p>
      </div>

      {/* About Us Content */}
      <div className="bg-white pb-6 pt-12 px-4 md:px-32 text-center">
        <p className="text-gray-700 text-lg mb-6">
          At <span className="font-bold text-[#2e5c84]">CI-STEM</span>  Information Technology Services Private Limited is an innovative and growth-driven IT support and services company that specializes in providing high-quality training, internship opportunities, and client-side live project experiences. With a strong focus on empowering the next generation of technology professionals, bridges the gap between academic education and practical industry demands. 
        </p>
        <p className="text-gray-700 text-lg mb-8">
          We offer industry-relevant training programs for college students, fresh graduates, and aspiring developers, covering key technologies like Java, MERN Stack, Python, Web Development,Analytics and Data Science with AI and Human Resources. We are involved in Software Development, Research work and Training with many Partners. We are in Staffing also.
        </p>
      </div>

      {/* Why Us Section */}
      <div className="px-4 pt-6 pb-12 md:px-8 lg:px-8 bg-white">
        <h2 className="text-5xl font-bold text-center mb-12 text-orange-500">Why Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-4xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-[380px] flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-[#2e5c84] mb-3">{feature.title}</h3>
              <p className="text-base text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;