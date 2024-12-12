import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white mx-auto  text-gray-800 backdrop-blur-lg fixed w-full z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Kishan.dev
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-600 hover:text-purple-400 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-purple-400 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-purple-400 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-purple-400 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
