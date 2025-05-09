import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <>
      <a
        href="#how-it-works"
        onClick={closeMenu}
        className="text-sm px-3 py-2 rounded shadow transition bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform duration-200 ease-in-out dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        How It Works
      </a>
      <a
        href="#why-choose-us"
        onClick={closeMenu}
        className="text-sm px-3 py-2 rounded shadow transition bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform duration-200 ease-in-out dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Why Us
      </a>
      <a
        href="#testimonials"
        onClick={closeMenu}
        className="text-sm px-3 py-2 rounded shadow transition bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform duration-200 ease-in-out dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Testimonials
      </a>
      <a
        href="#contact"
        onClick={closeMenu}
        className="text-sm px-3 py-2 rounded shadow transition bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform duration-200 ease-in-out dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Contact
      </a>
    </>
  );

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-2">
        {navLinks}
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white bg-indigo-600 p-2 rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col space-y-2 p-4 md:hidden">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
