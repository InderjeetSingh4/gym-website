import React from 'react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-beige text-charcoal">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <span className="text-6xl text-slateBlue/20 font-serif">"</span>
            <h3 className="text-2xl md:text-4xl font-light leading-relaxed -mt-6 mb-8">
              Element has completely transformed my relationship with fitness. 
              The environment is serene, the coaching is precise, and the results are undeniable.
            </h3>
            <div className="flex flex-col items-center">
              <p className="font-medium tracking-widest uppercase text-sm mb-1">Elena Rostova</p>
              <p className="text-charcoal/50 text-xs tracking-wide">Architect</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
