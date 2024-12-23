"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu on link click
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img
              src="/whatsapp-logo.jpg"
              alt="WhatsApp Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-lg font-semibold">Abdulrahman&apos;s Site</span>
          </div>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            title="Open Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-700 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
            title="Search the website"
          />
          <FiSearch className="ml-2 text-gray-400" size={20} />
        </div>

        {/* Links for Large Screens */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="#about" className="hover:text-gray-300">About</Link>
          <Link href="#blog" className="hover:text-gray-300">Blog</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>

      {/* Slide-in menu for Mobile */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white p-4 z-50 transition-transform"
          style={{ overflowY: "auto" }}
        >
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
              title="Close Menu"
            >
              <FiX size={24} />
            </button>
          </div>
          <div className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-gray-300" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-gray-300" onClick={closeMenu}>Blog</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-300" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
