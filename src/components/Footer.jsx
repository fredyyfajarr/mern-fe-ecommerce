/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <footer className="footer footer-center bg-gradient-to-r from-base-300 to-base-200 text-base-content p-8">
      <div className="container mx-auto">
        {/* Social Media Icons with Pulse Effect */}
        <div className="grid grid-flow-col gap-6 mb-6">
          <a 
            href="https://github.com/caidenrev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-125 hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a 
            href="https://linkedin.com/in/eka-revandi-5591a731b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-125 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a 
            href="https://instagram.com/caidenrev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-125 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a 
            href="mailto:caidenrev@gmail.com" 
            className="transform hover:scale-125 hover:text-red-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-flow-row gap-3 py-6 border-t border-b border-base-content/10">
          <h2 
            className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Frevan Stride Shop
          </h2>
          <p className="text-sm font-light italic">Creating awesome experiences since 2024</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
              <a 
                key={index}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 opacity-75 flex flex-col items-center">
          <p className="flex items-center gap-2">
            Made with <FaHeart className={`text-red-500 ${isHovering ? 'animate-bounce' : ''}`} /> by
            <span className="font-bold">Frevan Team Development</span>
          </p>
          <p className="text-sm mt-2">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
