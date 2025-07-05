import React from "react";
import Navbar from "../utils/Navbar";

const Results = () => {
  const studentResults = {
    name: "Riya Sharma",
    class: "10",
    rollNumber: "1023",
    term: "Term 1",
    subjects: [
      { name: "React JS", marksObtained: 90, totalMarks: 100 },
      { name: "Node JS", marksObtained: 85, totalMarks: 100 },
      { name: "JavaScript", marksObtained: 92, totalMarks: 100 },
      { name: "Java", marksObtained: 88, totalMarks: 100 },
      { name: "React Native", marksObtained: 87, totalMarks: 100 },
    ],
  };

  const totalMarks = studentResults.subjects.reduce(
    (acc, subject) => acc + subject.totalMarks,
    0
  );
  const totalObtained = studentResults.subjects.reduce(
    (acc, subject) => acc + subject.marksObtained,
    0
  );
  const percentage = ((totalObtained / totalMarks) * 100).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Exam Results</h2>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
          <div><span className="font-semibold text-gray-700">Student Name:</span> {studentResults.name}</div>
          <div><span className="font-semibold text-gray-700">Roll Number:</span> {studentResults.rollNumber}</div>
          <div><span className="font-semibold text-gray-700">Class:</span> {studentResults.class}</div>
          <div><span className="font-semibold text-gray-700">Term:</span> {studentResults.term}</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-left py-3 px-4">Marks Obtained</th>
                <th className="text-left py-3 px-4">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              {studentResults.subjects.map((subject, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 text-gray-800">{subject.name}</td>
                  <td className="py-3 px-4 text-gray-800">{subject.marksObtained}</td>
                  <td className="py-3 px-4 text-gray-800">{subject.totalMarks}</td>
                </tr>
              ))}
              <tr className="bg-yellow-50 font-semibold">
                <td className="py-3 px-4 text-gray-900">Total</td>
                <td className="py-3 px-4 text-gray-900">{totalObtained}</td>
                <td className="py-3 px-4 text-gray-900">{totalMarks}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-right text-lg font-semibold text-green-700">
          Percentage: {percentage}%
        </div>
      </div>
    </>
  );
};

export default Results;
