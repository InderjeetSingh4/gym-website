import React from 'react';
import { Dumbbell, Activity, Heart } from 'lucide-react';
import { ServiceItem } from '../../types';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Strength",
    description: "Build a foundation of power with scientifically backed resistance training protocols.",
    icon: Dumbbell,
  },
  {
    id: 2,
    title: "Mobility",
    description: "Enhance range of motion and joint health to move with grace and prevent injury.",
    icon: Activity,
  },
  {
    id: 3,
    title: "Wellness",
    description: "Holistic recovery sessions including sauna, cold plunge, and guided meditation.",
    icon: Heart,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-charcoal text-beige border-t border-beige/5">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="mb-16 md:mb-24">
            <h2 className="text-sm text-slateBlue tracking-ultra-wide uppercase mb-4">Our Expertise</h2>
            <p className="text-3xl md:text-4xl font-light">Curated disciplines.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <div className="group p-8 border border-beige/10 hover:border-slateBlue/50 transition-all duration-500 hover:-translate-y-2 bg-white/5 hover:bg-white/[0.02]">
                <service.icon className="w-8 h-8 text-slateBlue mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium mb-4 tracking-wide">{service.title}</h3>
                <p className="text-beige/60 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
