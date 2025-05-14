import React from "react";

const batches = [
  {
    category: "FAST-TRACK",
    course: "Any Course",
    date: "Any Date",
    time: "Any Time / Fast-track",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "",
  },
  {
    category: "DevOps",
    course: "DevOps",
    date: "Today 03:00 PM",
    time: "Afternoon",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+918334001667",
  },
  {
    category: "Core Java",
    course: "Java Full Stack",
    date: "Weekend 12:00 PM",
    time: "Weekend Offline",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+918334001667",
  },
  {
    category: "MERN Stack",
    course: "MERN Full Stack",
    date: "Today 07:00 AM",
    time: "Morning",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+918334001667",
  },
  {
    category: "MEAN Stack",
    course: "MEAN Full Stack",
    date: "Today 09:30 AM",
    time: "Morning",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+9178334001667",
  },
  {
    category: "Data Science",
    course: "Data Science",
    date: "Today 09:30 AM",
    time: "Morning",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+9178334001667",
  },
  {
    category: "AI And ML",
    course: "AI And ML",
    date: "Today 09:30 AM",
    time: "Morning",
    branch: "Online",
    trainer: "Professional Trainer",
    contact: "+9178334001667",
  },
];

const BatchCard = ({ batch }) => (
  <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm border-2 border-blue-300">
    <h2 className="text-blue-600 font-bold mb-2 ">{batch.category}</h2>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>
        <b>📘 Course:</b> {batch.course}
      </li>
      <li>
        <b>📅 Date:</b> {batch.date}
      </li>
      <li>
        <b>⏰ Time:</b> {batch.time}
      </li>
      <li>
        <b>📍 Branch:</b> {batch.branch}
      </li>
      <li>
        <b>🧑‍🏫 Trainer:</b> {batch.trainer}
      </li>
      {batch.contact && (
        <li>
          <b>📞 Contact:</b>{" "}
          <a
            href={`tel:${batch.contact}`}
            className="text-orange-600 underline"
          >
            {batch.contact}
          </a>
        </li>
      )}
    </ul>
    <div className="mt-4 flex justify-between">
      <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-800 text-sm cursor-pointer">
        Course Details
      </button>
      <button className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-blue-800 text-sm cursor-pointer">
        +Enroll
      </button>
    </div>
  </div>
);

const Batches = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <div className="text-center mb-4 pt-20">
        <h2 className="text-3xl font-bold text-orange-500">Batches</h2>
        <p className="text-gray-600">Upcoming Batches of Courses around the Globe</p>
      </div>
      <div className=" max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Search by Subject.."
        />
        <input
          className="border p-2 rounded"
          placeholder="Search by Course.."
        />
        <input
          className="border p-2 rounded"
          placeholder="Search by Batch Date"
        />
        <div className="flex gap-2">
          <input
            className="border p-2 rounded w-full"
            placeholder="Search by Branch.."
          />
          <button className="bg-gray-500 text-white px-4 rounded cursor-pointer hover:bg-blue-800">
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-center">
        {batches.map((batch, index) => (
          <BatchCard key={index} batch={batch} />
        ))}
      </div>
    </div>
  );
};

export default Batches;
