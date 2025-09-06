import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg z-50 transition-colors duration-500 ease-in-out">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div
          className="text-3xl font-extrabold text-blue-400 tracking-wide cursor-pointer select-none hover:text-blue-300 transition duration-300"
          onClick={() => {
            document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
          }}
        >
          MyPortfolio
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg md:static md:flex md:space-x-8 md:w-auto md:bg-transparent md:backdrop-blur-0 text-gray-300 font-semibold text-lg`}
        >
          <li>
            <a
              href="#hero"
              className="block px-6 py-3 cursor-pointer relative group hover:text-blue-400 transition md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-6 py-3 cursor-pointer relative group hover:text-blue-400 transition md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block px-6 py-3 cursor-pointer relative group hover:text-blue-400 transition md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-6 py-3 cursor-pointer relative group hover:text-blue-400 transition md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-6 py-3 cursor-pointer relative group hover:text-blue-400 transition md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
