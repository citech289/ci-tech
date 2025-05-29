import React from 'react';

const Methodology = () => {
    return (
        <section className="py-12 bg-white shadow-lg rounded-lg">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold text-gray-900 decoration-blue-500 decoration-4">Our Methodology</h2>
                <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
                    Immersing learners in a real-world collaborative environment, we foster technical and professional growth through project-based learning. This cultivates essential 21st-century skills, ensuring industry readiness.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-stretch">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 shadow-lg rounded-lg p-8 m-4 w-80 text-center transition duration-200 hover:shadow-2xl hover:scale-105 ">
                    <h3 className="text-3xl font-semibold text-blue-700">Learn</h3>
                    <p className="mt-3 text-gray-600">
                        Project-based learning environment to understand the practical application of theoretical concepts by deeply engaging the students.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-lg p-8 m-4 w-80 text-center transition duration-200 hover:shadow-2xl hover:scale-105 ">
                    <h3 className="text-3xl font-semibold text-purple-700">Practice</h3>
                    <p className="mt-3 text-gray-600">
                        Practice through problem-solving and project building can make a student an expert in their field of interest.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 shadow-lg rounded-lg p-8 m-4 w-80 text-center transition duration-200 hover:shadow-2xl hover:scale-105 ">
                    <h3 className="text-3xl font-semibold text-yellow-700">Intern</h3>
                    <p className="mt-3 text-gray-600">
                        Collaborative working environment with industry mentorship to make young talent ready for real-world challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Methodology;