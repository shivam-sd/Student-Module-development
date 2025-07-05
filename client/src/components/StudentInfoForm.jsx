import React, { useState } from 'react';
import Navbar from '../utils/Navbar';
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const StudentInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    Studentclass: '',
    section: '',
    gender: '',
    dob: '',
    fatherName: '',
    motherName: '',
    guardianName: '',
    contactNumber: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/CreateStudentInfo`,
        formData , {
          headers:{
            'Content-Type': 'application/json'
          }
        }
      );
      setMessage("Student information submitted successfully.");
      console.log("Response:", response.data);
      navigate("/studentinfo");
      toast.success("Student information submitted successfully.", {
        "position": "top-center",
      });

      // Reset form
      setFormData({
        name: '',
        rollNumber: '',
        Studentclass: '',
        section: '',
        gender: '',
        dob: '',
        fatherName: '',
        motherName: '',
        guardianName: '',
        contactNumber: '',
        email: '',
        currentAddress: '',
        permanentAddress: '',
      });

    } catch (err) {
      console.error("Error:", err);
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Student Information Form</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full" required />
          <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number" className="border p-2 rounded w-full" required />

          <select name="Studentclass" value={formData.Studentclass} onChange={handleChange} className="border p-2 rounded w-full" required>
            <option value="">Select Class</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select name="section" value={formData.section} onChange={handleChange} className="border p-2 rounded w-full" required>
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

          <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded w-full" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded w-full" required />

          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" className="border p-2 rounded w-full" />
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's Name" className="border p-2 rounded w-full" />
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} placeholder="Guardian's Name" className="border p-2 rounded w-full" />

          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" className="border p-2 rounded w-full" pattern="[0-9]{10}" title="Enter a valid 10-digit phone number" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" required />

          <textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" className="border p-2 rounded w-full col-span-1 md:col-span-2" required></textarea>
          <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className="border p-2 rounded w-full col-span-1 md:col-span-2" required></textarea>

          <button type="submit" disabled={loading} className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 w-full transition">
            {loading ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <div className="col-span-1 md:col-span-2 text-center mt-2 text-sm text-gray-800">
              {message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default StudentInfoForm;
