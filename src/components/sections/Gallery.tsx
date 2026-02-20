import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const images = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    alt: "Main Gym Floor",
    className: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1517963879466-e9b5ce382569?q=80&w=2071&auto=format&fit=crop",
    alt: "Cardio Zone",
    className: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    alt: "Free Weights",
    className: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
    alt: "Recovery Area",
    className: "col-span-1 md:col-span-2 row-span-1"
  }
];

export const Gallery: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-32 bg-deepBlack overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The <span className="text-neonBlue">Environment</span>.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Designed for focus. A sanctuary of shadow and light where distractions fade and only effort remains.
          </p>
        </ScrollReveal>
      </div>

      <div ref={containerRef} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[120vh] md:h-[800px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              className={`relative overflow-hidden rounded-3xl group ${img.className}`}
              style={{ y: idx % 2 === 0 ? y : 0 }} // Parallax effect on alternate items
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
