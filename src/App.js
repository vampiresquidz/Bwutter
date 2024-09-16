import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MemeSection from './components/Memesection';
import Footer from './components/Footer';
import Divider from './components/Divider';



const App = () => {

  const logos  = [
    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",
    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png",    "/bwutterhappy.png",
    "/bwuttershocked.png",
    "/bwutterstanding.png"
  ]
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Divider logos={logos}/>

        <About />
        <Divider logos={logos}/>

      </main>
      <Footer />
    </div>
  );
};

export default App;
