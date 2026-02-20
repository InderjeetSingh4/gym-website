import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Dumbbell, Zap, Activity, Brain, Timer } from 'lucide-react';

const features = [
  {
    title: "Smart Weights",
    description: "AI-adjusted resistance that learns your strength curve.",
    icon: Dumbbell,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-white/10 to-transparent"
  },
  {
    title: "Recovery Pods",
    description: "Cryotherapy and infrared saunas for instant regeneration.",
    icon: Zap,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Bio-Feedback",
    description: "Real-time metrics displayed on your retina via AR.",
    icon: Activity,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Neuro-Priming",
    description: "Pre-workout brain stimulation for peak focus.",
    icon: Brain,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-bl from-neonBlue/20 to-transparent"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-deepBlack relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
            Engineered for <span className="text-neonBlue">Performance</span>.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className={feature.colSpan}>
              <div className={`group relative h-full p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-glow ${feature.bg}`}>
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
                  <feature.icon size={120} />
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full min-h-[240px]">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
