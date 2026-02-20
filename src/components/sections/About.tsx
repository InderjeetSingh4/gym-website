import React from 'react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal text-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <RevealOnScroll>
              <h2 className="text-sm text-slateBlue tracking-ultra-wide uppercase mb-2">
                The Philosophy
              </h2>
              <h3 className="text-3xl md:text-4xl font-light leading-tight">
                We believe fitness is not just a routine, but an essential element of a balanced life.
              </h3>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <p className="text-beige/60 leading-relaxed font-light">
                At Element, we strip away the unnecessary. Our approach focuses on pure movement, 
                mindful strength, and sustainable endurance. We provide a sanctuary where focus 
                meets physique, designed for those who seek clarity through effort.
              </p>
            </RevealOnScroll>
          </div>

          {/* Image/Visual */}
          <RevealOnScroll delay={0.4}>
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
                alt="Minimal Gym Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
