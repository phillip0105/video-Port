import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import AiChat from './components/AiChat';

const App: React.FC = () => {
  return (
    <div className="bg-cinematic-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <AiChat />
    </div>
  );
};

export default App;