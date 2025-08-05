

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";


const HamburgerIcon = ({ isOpen }) => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path className={`transition-transform duration-300 ease-in-out`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  
  const activeStyle = {
    borderBottom: '2px solid #FBBF24', 
    color: '#FBBF24',
    paddingBottom: '4px',
  };

  return (
    <nav className="bg-slate-900 bg-opacity-80 backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 text-yellow-400"
            >
              <path d="M12,9c-1.65,0-3,1.35-3,3s1.35,3,3,3s3-1.35,3-3S13.65,9,12,9z M12,16.5c-2.48,0-4.5-2.02-4.5-4.5s2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5S14.48,16.5,12,16.5z M12,7V4c0-0.55-0.45-1-1-1s-1,0.45-1,1v3c0,0.55,0.45,1,1,1S12,7.55,12,7z M12,21v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3c0,0.55,0.45,1,1,1S12,21.55,12,21z M4.93,6.34l2.12-2.12c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L3.51,5.05c-0.39,0.39-0.39,1.02,0,1.41C3.9,6.82,4.54,6.82,4.93,6.34z M17.66,19.07l2.12-2.12c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0l-2.12,2.12c-0.39,0.39-0.39,1.02,0,1.41C16.63,19.46,17.27,19.46,17.66,19.07z M3,13H0c-0.55,0-1-0.45-1-1s0.45-1,1-1h3c0.55,0,1,0.45,1,1S3.55,13,3,13z M21,13h-3c-0.55,0-1-0.45-1-1s0.45-1,1-1h3c0.55,0,1,0.45,1,1S21.55,13,21,13z M4.93,17.66l-2.12,2.12c-0.39,0.39-0.39,1.02,0,1.41s1.02,0.39,1.41,0l2.12-2.12c0.39-0.39,0.39-1.02,0-1.41C5.96,17.27,5.32,17.27,4.93,17.66z M19.07,4.93l-2.12,2.12c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0l2.12-2.12c0.39-0.39,0.39-1.02,0-1.41S19.46,4.54,19.07,4.93z" />
            </svg>
            
            <span className="text-white text-2xl font-bold tracking-wide">
              Basti Ki Pathshala
            </span>
          </Link>

          
          <div className="hidden md:block">
            <ul className="flex items-center space-x-10 text-lg font-medium text-gray-200">
              <li>
                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="hover:text-yellow-400 transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="hover:text-yellow-400 transition-colors duration-300">
                  About
                </NavLink>
              </li>
              <li>
                <Link to="/volunteer" className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transform transition-all duration-300 shadow-lg">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <HamburgerIcon isOpen={isOpen} />
            </button>
          </div>

        </div>
      </div>

     
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col items-center space-y-6 px-4 pt-4 pb-8 text-lg font-medium text-gray-200">
          <li>
            <NavLink to="/" onClick={closeMenu} className="hover:text-yellow-300 transition-colors">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className="hover:text-yellow-300 transition-colors">About</NavLink>
          </li>
          <li>
            <Link to="/volunteer" onClick={closeMenu} className="mt-4 inline-block bg-yellow-400 text-slate-900 px-8 py-2 rounded-full font-semibold hover:bg-yellow-300 shadow-md">
              Volunteer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}