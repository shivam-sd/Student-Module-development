import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = "block py-2 px-3 rounded hover:bg-blue-500 transition duration-200";

  return (
    <nav className="bg-blue-600 text-white w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Student Dashboard</h1>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden block text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-4 text-sm sm:text-base">
          <li><Link to="/studentinfo" className={linkClass}>Student Info</Link></li>
          <li><Link to="/attendance" className={linkClass}>Attendance</Link></li>
          <li><Link to="/results" className={linkClass}>Results</Link></li>
          <li><Link to="/homework" className={linkClass}>Homework</Link></li>
          <li><Link to="/subjects" className={linkClass}>Subjects</Link></li>
          <li><Link to="/timetable" className={linkClass}>Timetable</Link></li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-1 px-4 pb-4 bg-blue-700 text-base text-center sm:text-lg">
          <li><Link to="/studentinfo" onClick={toggleMenu} className={linkClass}>Student Info</Link></li>
          <li><Link to="/attendance" onClick={toggleMenu} className={linkClass}>Attendance</Link></li>
          <li><Link to="/results" onClick={toggleMenu} className={linkClass}>Results</Link></li>
          <li><Link to="/homework" onClick={toggleMenu} className={linkClass}>Homework</Link></li>
          <li><Link to="/subjects" onClick={toggleMenu} className={linkClass}>Subjects</Link></li>
          <li><Link to="/timetable" onClick={toggleMenu} className={linkClass}>Timetable</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
