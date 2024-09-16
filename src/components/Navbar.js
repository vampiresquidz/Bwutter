import React from 'react';

const Navbar = () => (
  <nav className="bg-yellow-400 shadow-lg p-4 flex justify-between items-center">
    <div className="text-4xl font-display font-bold">Bwutter</div>
    <div className="flex space-x-4">
      <a href="#home" className="text-xl font-body">Home</a>
      <a href="#about" className="text-xl  font-body">About</a>
      <a href="#memes" className="text-xl font-body">Memes</a>
      <a href="#contact" className="text-x font-body">Contact</a>
      <a href="https://pump.fun/3adRrkuJmUWb1bCwZDavvewURgZqCnSFhDQPNS8hpump" className="bg-green-900 text-xl text-white px-4 py-2 rounded-full hover:bg-purple-700 font-body">Buy Now</a>
    </div>
  </nav>
);

export default Navbar;
