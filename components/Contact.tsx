import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-cinematic-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Let's Create</h2>
          <p className="text-gray-400 text-xl">Ready to bring your vision to life?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10 bg-cinematic-900 p-8 rounded-2xl border border-white/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cinematic-800 rounded-lg text-cinematic-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-gray-400">hello@lumina-studio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cinematic-800 rounded-lg text-cinematic-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cinematic-800 rounded-lg text-cinematic-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Studio</h3>
                  <p className="text-gray-400">123 Cinema St, Brooklyn, NY 11211</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-cinematic-800 rounded-full text-gray-400 hover:bg-cinematic-accent hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-cinematic-800 rounded-full text-gray-400 hover:bg-cinematic-accent hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-cinematic-800 rounded-full text-gray-400 hover:bg-cinematic-accent hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-cinematic-900 border border-white/10 rounded-lg p-4 text-white focus:border-cinematic-accent focus:outline-none focus:ring-1 focus:ring-cinematic-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-cinematic-900 border border-white/10 rounded-lg p-4 text-white focus:border-cinematic-accent focus:outline-none focus:ring-1 focus:ring-cinematic-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Project Type</label>
              <select className="w-full bg-cinematic-900 border border-white/10 rounded-lg p-4 text-white focus:border-cinematic-accent focus:outline-none focus:ring-1 focus:ring-cinematic-accent transition-colors">
                <option>Commercial</option>
                <option>Music Video</option>
                <option>Documentary</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-cinematic-900 border border-white/10 rounded-lg p-4 text-white focus:border-cinematic-accent focus:outline-none focus:ring-1 focus:ring-cinematic-accent transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button className="w-full py-4 bg-cinematic-accent text-white font-bold uppercase tracking-widest rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-900/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <footer className="border-t border-white/10 mt-24 py-8 bg-cinematic-900">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Lumina Studios. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Contact;