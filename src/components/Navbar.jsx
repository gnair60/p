import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const resumePath = "/resume.pdf"; // Path to the resume in the public folder

  return (
    <nav
      className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0"
      style={{ cursor: "default" }}
    >
      <div className="mx-auto text-center flex w-5/6 justify-between">
        {/* Left Links */}
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold tracking-wide hover:text-[#800000] transition duration-300 pl-1"
  >          Gautam Nair
          </Link>
       </div>


        {/* Right Links */}
        <div className="hidden sm:flex text-2xl space-x-4 items-center">
          <Link to="/about"
          className='text-white hover:text-[#800000]'
          >About</Link>
          <Link to="/education"
          className='text-white hover:text-[#800000]'
          >Education</Link>
          <Link to="/experience"
          className='text-white hover:text-[#800000]'
          >Experience</Link>
          <Link to="/projects"
          className='text-white hover:text-[#800000]'
          >Projects</Link>
          {/* Resume Link */}
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${
            isMobileMenuOpen ? "flex flex-col items-center justify-center" : "hidden"
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={closeMobileMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              {/* Resume Link in Mobile */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="text-green-400 hover:text-green-300 transition duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
