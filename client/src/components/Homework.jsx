import React from "react";
import Navbar from "../utils/Navbar";

const Homework = () => {
  const homeworkList = [
    {
      subject: "React JS",
      description: "Create a to-do app using hooks and components",
      dueDate: "2025-07-06",
    },
    {
      subject: "Node JS",
      description: "Set up an Express server and define 3 API routes",
      dueDate: "2025-07-07",
    },
    {
      subject: "JavaScript",
      description: "Practice 10 array methods with examples",
      dueDate: "2025-07-08",
    },
    {
      subject: "Java",
      description: "Write a Java program using OOP concepts",
      dueDate: "2025-07-06",
    },
    {
      subject: "React Native",
      description: "Build a simple mobile UI screen layout",
      dueDate: "2025-07-09",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Homework Assignments</h2>

        <div className="space-y-6">
          {homeworkList.map((hw, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{hw.subject}</h3>
              <p className="text-gray-800 mb-1">{hw.description}</p>
              <p className="text-sm text-gray-600">Due Date: <span className="font-medium">{hw.dueDate}</span></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homework;
