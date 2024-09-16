import React, { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const contractAddress = "fillerEY9kT4Z9nKXPXWZEhRd2hJQ85nCK4Hjs8oX2";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative bg-white text-black p-4 sm:p-8 text-center overflow-hidden"
      style={{
        backgroundImage: `url('/butterbg.png')`,
        backgroundSize: 'cover', // Stretches the image to cover the whole section
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Ensures no repetition of the image
      }}
    >
      <div className="relative z-10">
        <img 
          src="/bwutter.png" 
          alt="Bwutter" 
          className="mx-auto rounded-lg shadow-lg mb-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xs md:max-w-md border-4 border-black" 
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-3 text-black-700">$Bwutter</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-body text-black">Get Yourself Some Bwutter</p>
        <div className="flex flex-wrap justify-center mt-8 space-x-2 sm:space-x-4">
          <a href="https://dexscreener.com/solana/" target="_blank" rel="noopener noreferrer">
            <img src="/buttons/dexscreener.png" alt="Dexscreener" className="h-8 sm:h-10 md:h-12 rounded-lg" />
          </a>
          <a href="https://pump.fun/9Y7myWuGEY9kT4Z9nKXPXWZEhRd2hJQ85nCK4Hjs8oX2" target="_blank" rel="noopener noreferrer">
            <img src="/buttons/pumpfun.webp" alt="Raydium" className="h-8 sm:h-10 md:h-12 border-4 border-black rounded-lg" />
          </a>
          <a href="https://t.me/BwutterSolana" target="_blank" rel="noopener noreferrer">
            <img src="/buttons/tg.svg" alt="Telegram" className="h-8 sm:h-10 md:h-12 rounded-lg" />
          </a>
          <a href="https://x.com/search?q=%24Bwutter&src=typed_query" target="_blank" rel="noopener noreferrer">
            <img src="/buttons/tw.svg" alt="Twitter" className="h-8 sm:h-10 md:h-12 border-4 border-black rounded-lg" />
          </a>
        </div>
        <div className="mt-8">
          <div 
            className="inline-block px-2 py-1 bg-gray-200 rounded-lg border-4 border-black"
            onClick={handleCopy}
            style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
          >
            <span className="text-xs sm:text-sm md:text-lg font-bold text-black">
              {copied ? 'Copied!' : 'CA: ' + contractAddress}
            </span>
          </div>
        </div>
        <div className="mt-8">
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-900 text-white rounded-lg border-4 border-black font-bold text-lg sm:text-xl md:text-2xl">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
