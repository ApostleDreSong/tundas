"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 md:px-24 lg:px-36 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/"><Image src="/tundas_logo.png" alt="Tundas Logo" width={145} height={39} /></a>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-custom-grey hover:text-white font-normal">Services</a>
          <a href="#" className="text-custom-grey hover:text-white font-normal">About Us</a>
          <a href="#" className="text-custom-grey hover:text-white font-normal">FAQs</a>
        </div>

        <div className="hidden md:block">
          <a href="#" className="text-custom-grey text-custom-16 font-medium font-semibold bg-custom-lavender hover:bg-custom-lavender rounded-custom-30.4" style={{ padding: '10px 20px' }}>
            Contact Sales
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-custom-grey hover:text-white mb-2">Services</a>
          <a href="#" className="block text-custom-grey hover:text-white mb-2">About Us</a>
          <a href="#" className="block text-custom-grey hover:text-white mb-4">FAQs</a>
          <a href="#" className="inline-block text-custom-grey text-custom-16 font-medium font-semibold bg-custom-lavender hover:bg-custom-lavender rounded-custom-30.4" style={{ padding: '10px 20px' }}>
            Contact Sales
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
