import React, { useState, useEffect } from "react";
import Navbar from "../utils/Navbar";
import attendanceData from "./Data/attendence";

const Attendance = () => {
  const [attendanceSummary, setAttendanceSummary] = useState({
    totalDays: 30,
    present: 26,
    absent: 4,
    percentage: ((26 / 30) * 100).toFixed(2),
  });

  

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Attendance Report</h2>

        {/* Summary Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700">Total Days</h3>
            <p className="text-xl font-bold text-blue-900">{attendanceSummary.totalDays}</p>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-green-700">Present</h3>
            <p className="text-xl font-bold text-green-900">{attendanceSummary.present}</p>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-red-700">Absent</h3>
            <p className="text-xl font-bold text-red-900">{attendanceSummary.absent}</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-yellow-700">Attendance %</h3>
            <p className="text-xl font-bold text-yellow-900">{attendanceSummary.percentage}%</p>
          </div>
        </div>

        {/* Daily Attendance Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-4 text-gray-800">{entry.date}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      entry.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Attendance;
