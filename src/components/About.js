import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400">
      {/* Centered GIF */}
      <img 
        src="/butterd.gif" 
        alt="Butter" 
        className="" 
      />
      {/* Big Text */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-8 text-yellow-100">
        IT'S JUST BWUTTER
      </h1>
    </div>
  );
};

export default About;
