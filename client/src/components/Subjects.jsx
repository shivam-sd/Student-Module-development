import React from "react";
import Navbar from "../utils/Navbar";

const Subjects = () => {
  const subjects = [
    { name: "React JS", teacher: "Mr. Verma", code: "REACT101" },
    { name: "Node JS", teacher: "Ms. Sharma", code: "NODE102" },
    { name: "JavaScript", teacher: "Mrs. Kapoor", code: "JS103" },
    { name: "Java", teacher: "Mr. Yadav", code: "JAVA104" },
    { name: "React Native", teacher: "Ms. Mehta", code: "RN105" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Subjects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="p-4 border border-gray-100 rounded-md bg-gray-50 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {subject.name}
              </h3>
              <p className="text-gray-800 mb-1">Subject Code: {subject.code}</p>
              <p className="text-gray-600 text-sm">Teacher: {subject.teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subjects;
