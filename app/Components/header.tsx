import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react"; // For mobile menu icon
import LoginModal from "./LoginModal"; // Import the LoginModal component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for LoginModal

  return (
    <>
      {/* Top Banner */}
      <div className="bg-blue-100 text-center py-2 text-gray-700 text-sm">
        Navigate your ideal career path with tailored expert advice{" "}
        <a href="#" className="text-blue-500 font-medium hover:underline">
          Contact Expert
        </a>
      </div>

      {/* Main Header */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 md:px-10">
          
          {/* Left Side - Logo and Button */}
          <div className="flex items-center gap-5">
            <div className="text-blue-600 font-bold text-xl">
              <span className="text-blue-500">accredian</span>
              <span className="text-gray-600 text-sm block leading-tight">
                credentials that matter
              </span>
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm flex items-center space-x-2 hover:bg-blue-700 hidden md:flex">
              <span>Explore</span>
              <img src="/assets/course-arrow.png" alt="Down Arrow" className="w-3 h-2" />
            </button>
          </div>

          {/* Navigation & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 text-gray-700">
              <Link to="/refer" className="hover:text-blue-500">
                Refer & Earn
              </Link>
              <Link to="/resources" className="hover:text-blue-500">
                Resources
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </nav>

            {/* Login and Menu Button */}
            <div className="flex items-center space-x-4">
              <button 
                className="text-gray-700 bg-gray-100 px-5 py-2 rounded-md text-sm hover:bg-gray-200 hidden md:block"
                onClick={() => setIsModalOpen(true)} // Open LoginModal
              >
                Login
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 hidden md:block">
                Try for free
              </button>

              {/* Mobile Menu Icon */}
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-2">
            <Link to="/refer" className="block py-2 text-gray-700 hover:text-blue-500">
              Refer & Earn
            </Link>
            <Link to="/resources" className="block py-2 text-gray-700 hover:text-blue-500">
              Resources
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-500">
              About Us
            </Link>
            <button 
              className="w-full text-gray-700 bg-gray-100 py-2 rounded-md hover:bg-gray-200 mt-2"
              onClick={() => setIsModalOpen(true)} // Open LoginModal on mobile
            >
              Login
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-2">
              Try for free
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
