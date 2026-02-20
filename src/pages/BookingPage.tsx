import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-deepBlack overflow-hidden p-6">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-neonBlue/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-900/20 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Back Navigation */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-glass">
          {!isSubmitted ? (
            <>
              <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Begin Your Journey</h1>
                <p className="text-white/50">Complete your profile to unlock full access.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <Input label="Full Name" type="text" required />
                <Input label="Email Address" type="email" required />
                <Input label="Phone Number" type="tel" required />
                <Input 
                  label="Primary Goal" 
                  options={["Strength & Hypertrophy", "Weight Loss", "Mobility & Flexibility", "Athletic Performance"]} 
                  required 
                />

                <Button type="submit" variant="primary" className="w-full mt-4 !py-4 text-base shadow-glow">
                  Confirm Membership
                </Button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-neonBlue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-neonBlue">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Aura.</h2>
              <p className="text-white/50 mb-8">Your membership has been confirmed. Check your email for your access pass.</p>
              <Button variant="secondary" to="/" className="w-full">Return Home</Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
