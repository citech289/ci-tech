import { useParams } from "react-router-dom";

const Roadmap = () => {
  const { slug } = useParams();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">
        Roadmap for {slug.replace(/-/g, " ")}
      </h2>
      <p className="text-gray-700 text-lg">
        {/* Replace below with your actual roadmap content */}
        This page will show the roadmap details for the <strong>{slug}</strong> course.
      </p>
    </div>
  );
};

export default Roadmap;
