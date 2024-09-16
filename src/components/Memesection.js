import React from 'react';

const memeImages = [
  '/memes/castingcouch.jfif',
  '/memes/cussy.jpg',
  '/memes/feel.jpg',
  '/memes/cramer.jfif',
  '/memes/feel.jpg',
  '/memes/nyt.webp',
  '/memes/return.png',
  '/memes/sexy.webp',
  '/memes/simpson.jfif',
  '/memes/throuple.webp',
  '/memes/trump.png',
  '/memes/condom.jpg'

];

const MemeSection = () => (
  <section id="memes" className="bg-gray-100 p-8 relative overflow-auto" style={{ height: '80vh' }}>
    <h2 className="text-4xl font-display font-bold mb-4 text-center z-10 relative">Couch Cussy Memes</h2>
    <div className="w-full md:w-3/4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
        {memeImages.map((src, index) => {
          // Determine tilt angle for the first and last images in each row
          const tiltAngle = (index % 3 === 0) ? -10 : (index % 3 === 2) ? 10 : 0;
          // Determine margin for overlapping effect
          const marginStyle = (index % 3 === 1) ? '0' : (index % 3 === 0) ? '-10px' : '10px';
          return (
            <div key={index} className="flex justify-center items-center relative" style={{ marginLeft: marginStyle, marginRight: marginStyle }}>
              <img
                src={src}
                alt={`Meme ${index + 1}`}
                className="w-full max-w-xs h-auto rounded-lg border-4 border-white shadow-lg"
                style={{
                  transform: `rotate(${tiltAngle}deg)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MemeSection;
