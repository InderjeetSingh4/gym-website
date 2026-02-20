import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">AURA<span className="text-neonBlue">.</span></h2>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Redefining human potential through technology, design, and community. 
              Join the future of fitness today.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-neonBlue transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-neonBlue transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-neonBlue transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-neonBlue hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-neonBlue hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-neonBlue hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30">
          <p>© 2025 Aura Fitness Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
