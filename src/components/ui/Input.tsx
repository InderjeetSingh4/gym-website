import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  options?: string[]; // For select inputs
}

export const Input: React.FC<InputProps> = ({ label, options, className = "", ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
    if (props.onBlur) props.onBlur(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) props.onChange(e);
  };

  const labelActive = isFocused || hasValue;

  return (
    <div className="relative mb-6 group">
      {options ? (
        <select
          {...props}
          className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-neonBlue/50 focus:ring-1 focus:ring-neonBlue/50 transition-all duration-300 appearance-none cursor-pointer ${className}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option value="" disabled></option>
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-offBlack text-white">{opt}</option>
          ))}
        </select>
      ) : (
        <input
          {...props}
          className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-neonBlue/50 focus:ring-1 focus:ring-neonBlue/50 transition-all duration-300 shadow-inner ${className}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none text-white/50 ${
          labelActive ? 'top-2 text-xs text-neonBlue' : 'top-4 text-base'
        }`}
      >
        {label}
      </label>
    </div>
  );
};
