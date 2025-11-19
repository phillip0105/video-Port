import React from 'react';
import { Camera, Award, Coffee, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Camera />, value: "150+", label: "Projects" },
    { icon: <Award />, value: "12", label: "Awards" },
    { icon: <Globe />, value: "8", label: "Countries" },
    { icon: <Coffee />, value: "∞", label: "Coffees" },
  ];

  return (
    <section id="about" className="py-24 bg-cinematic-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-cinematic-accent/20 blur-2xl rounded-full opacity-20"></div>
            <img 
              src="https://picsum.photos/id/338/600/800" 
              alt="Director" 
              className="relative rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Obsessed with <span className="text-cinematic-accent">Light</span> & <span className="text-cinematic-accent">Shadow</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Alex, a Director of Photography based in New York City. I don't just capture footage; I engineer emotion. 
                With a background in fine art and over a decade behind the lens, my approach blends technical precision with raw, organic storytelling.
              </p>
              <p>
                Whether it's a high-speed car commercial or an intimate documentary, I bring a distinct visual signature characterized by 
                dynamic lighting, bold composition, and purposeful movement.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-cinematic-800 rounded-lg border border-white/5 hover:border-cinematic-accent/30 transition-colors">
                  <div className="text-cinematic-accent mb-3 flex justify-center">
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;