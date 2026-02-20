import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "Vikram Malhotra",
    specialty: "High Performance",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    specialty: "Mobility & Flow",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Arjun Kapoor",
    specialty: "Strength Conditioning",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Trainers: React.FC = () => {
  return (
    <section className="py-32 bg-deepBlack border-t border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Guided by the <span className="text-neonBlue">Best</span>.
              </h2>
              <p className="text-white/50 text-lg">
                Elite coaching for elite results.
              </p>
            </div>
            <a href="#" className="hidden md:block text-neonBlue hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0">
              View all trainers &rarr;
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                {/* Image */}
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-neonBlue text-sm tracking-wide uppercase mb-6">{trainer.specialty}</p>
                  
                  {/* Social Icons - Fade in on hover */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-neonBlue hover:text-white transition-all">
                      <Instagram size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-neonBlue hover:text-white transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-neonBlue hover:text-white transition-all">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
