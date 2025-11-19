import React from 'react';
import { Play, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Placeholder (Simulating Video) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/48/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 scale-110 animate-[pulse_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-900/30 via-cinematic-900/60 to-cinematic-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-300 mb-6">
            Award Winning Cinematography
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-8">
            VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">STORIES</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Crafting immersive visual experiences for brands, artists, and visionaries. 
            From concept to color grade, we bring your narrative to life.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-cinematic-accent text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all transform hover:scale-105 flex items-center gap-2 rounded-sm"
            >
              View Work
            </a>
            <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 rounded-sm">
              <Play className="w-4 h-4 fill-current" />
              Showreel
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;