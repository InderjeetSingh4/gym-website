import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = "",
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide";
  
  const variants = {
    primary: "bg-white text-black hover:bg-silver hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    glass: "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
  };

  const content = (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};
