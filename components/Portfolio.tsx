import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-cinematic-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Selected Works</h2>
            <div className="h-1 w-24 bg-cinematic-accent"></div>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-right">
            A curation of our most recent commercial, documentary, and narrative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-video bg-cinematic-800 overflow-hidden cursor-pointer rounded-sm"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-cinematic-accent text-xs font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">{project.client}</p>
                  <span className="inline-flex items-center gap-2 text-white border-b border-white pb-1">
                    <Play className="w-3 h-3 fill-current" /> Watch Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl bg-cinematic-800 rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-cinematic-accent transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video bg-black flex items-center justify-center group relative">
               {/* Placeholder for Video Player */}
               <img 
                src={selectedProject.thumbnailUrl} 
                alt="Video Placeholder" 
                className="w-full h-full object-cover opacity-50"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-20 h-20 bg-cinematic-accent rounded-full flex items-center justify-center pl-1 hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                    <Play className="w-8 h-8 text-white fill-current" />
                 </button>
               </div>
               <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
                 (Video playback simulation)
               </p>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-cinematic-accent font-medium mb-4">
                    {selectedProject.category} • {selectedProject.year}
                  </p>
                </div>
                <div className="md:text-right">
                   <p className="text-sm text-gray-400 uppercase tracking-wider">Client</p>
                   <p className="text-white font-medium">{selectedProject.client}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-3xl mt-4">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;