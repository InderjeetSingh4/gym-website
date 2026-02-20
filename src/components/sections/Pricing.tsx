import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essential",
    price: "₹4,999",
    features: ["Access to gym floor", "Smart locker", "1 Guest pass/mo"],
    highlight: false
  },
  {
    name: "Pro",
    price: "₹9,999",
    features: ["All Essential features", "Unlimited classes", "Recovery pod access", "Nutrition planning"],
    highlight: true
  },
  {
    name: "Elite",
    price: "₹19,999",
    features: ["All Pro features", "Private training (4x/mo)", "Laundry service", "Priority booking"],
    highlight: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-deepBlack">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Membership</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-white/10 border-neonBlue/50 shadow-glow scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neonBlue text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-white/80 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/40">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <Check size={16} className="text-neonBlue" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.highlight ? 'primary' : 'secondary'} 
                  to="/book" 
                  className="w-full"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
