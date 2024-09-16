import React from 'react';

const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-white p-4 text-center">
    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
      <a href="#home" className="hover:underline font-body">Home</a>
      <a href="#about" className="hover:underline font-body">About</a>
      <a href="#memes" className="hover:underline font-body">Memes</a>
      <a href="#contact" className="hover:underline font-body">Contact</a>
    </div>
    <p className="mt-4 font-body text-white">&copy; 2024 Bwutter. All rights reserved. Not an investment</p>
  </footer>
);

export default Footer;
