import React, { useState, useEffect } from "react";
import Navbar from "../utils/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentInfo = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/GetStudentInfo`
        );
        setStudents(response.data.data || []);
        console.log("Student Information:", response.data);
      } catch (error) {
        console.error("Error fetching student information:", error);
        setError("Failed to load student information.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  const InfoRow = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <span className="w-48 font-semibold text-gray-700 mb-1 sm:mb-0">
        {label}
      </span>
      <span className="text-gray-900">{value}</span>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            All Student Profiles
          </h2>
          <Link to={"/"} className="text-sm text-white bg-blue-600 p-2 rounded-2xl font-bold">
            Add Student Info
          </Link>
        </div>
        {loading ? (
          <p className="text-center text-blue-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : students.length > 0 ? (
          students.map((student, index) => (
            <div
              key={index}
              className="mb-10 p-4 bg-gray-50 rounded-md shadow-sm border border-gray-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm sm:text-base">
                <InfoRow label="Name:" value={student.name} />
                <InfoRow label="Roll Number:" value={student.rollNumber} />
                <InfoRow
                  label="Class:"
                  value={student.studentClass || student.class}
                />
                <InfoRow label="Section:" value={student.section} />
                <InfoRow label="Gender:" value={student.gender} />
                <InfoRow
                  label="Date of Birth:"
                  value={student.dob?.split("T")[0]}
                />
                <InfoRow label="Father's Name:" value={student.fatherName} />
                <InfoRow label="Mother's Name:" value={student.motherName} />
                <InfoRow
                  label="Guardian's Name:"
                  value={student.guardianName}
                />
                <InfoRow
                  label="Contact Number:"
                  value={student.contactNumber}
                />
                <InfoRow label="Email:" value={student.email} />
                <div className="sm:col-span-2">
                  <InfoRow
                    label="Current Address:"
                    value={student.currentAddress}
                  />
                </div>
                <div className="sm:col-span-2">
                  <InfoRow
                    label="Permanent Address:"
                    value={student.permanentAddress}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No student records available.
          </p>
        )}
      </div>
    </>
  );
};

export default StudentInfo;
