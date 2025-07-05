import React from "react";
import Navbar from "../utils/Navbar";

const Timetable = () => {
  const schedule = [
    {
      day: "Monday",
      periods: [
        { time: "9:00 AM - 10:00 AM", subject: "React JS" },
        { time: "10:00 AM - 11:00 AM", subject: "JavaScript" },
        { time: "11:15 AM - 12:15 PM", subject: "Node JS" },
        { time: "12:30 PM - 1:30 PM", subject: "React Native" },
      ],
    },
    {
      day: "Tuesday",
      periods: [
        { time: "9:00 AM - 10:00 AM", subject: "JavaScript" },
        { time: "10:00 AM - 11:00 AM", subject: "React Native" },
        { time: "11:15 AM - 12:15 PM", subject: "Java" },
        { time: "12:30 PM - 1:30 PM", subject: "Node JS" },
      ],
    },
    {
      day: "Wednesday",
      periods: [
        { time: "9:00 AM - 10:00 AM", subject: "Java" },
        { time: "10:00 AM - 11:00 AM", subject: "React JS" },
        { time: "11:15 AM - 12:15 PM", subject: "JavaScript" },
        { time: "12:30 PM - 1:30 PM", subject: "React Native" },
      ],
    },
    {
      day: "Thursday",
      periods: [
        { time: "9:00 AM - 10:00 AM", subject: "Node JS" },
        { time: "10:00 AM - 11:00 AM", subject: "React JS" },
        { time: "11:15 AM - 12:15 PM", subject: "Java" },
        { time: "12:30 PM - 1:30 PM", subject: "JavaScript" },
      ],
    },
    {
      day: "Friday",
      periods: [
        { time: "9:00 AM - 10:00 AM", subject: "React Native" },
        { time: "10:00 AM - 11:00 AM", subject: "JavaScript" },
        { time: "11:15 AM - 12:15 PM", subject: "Node JS" },
        { time: "12:30 PM - 1:30 PM", subject: "Java" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Weekly Timetable</h2>

        <div className="space-y-8">
          {schedule.map((daySchedule, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{daySchedule.day}</h3>
              <ul className="space-y-3">
                {daySchedule.periods.map((period, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2">
                    <span className="text-gray-700 font-medium">{period.time}</span>
                    <span className="text-gray-900">{period.subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timetable;
