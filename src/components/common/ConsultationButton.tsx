import React from 'react';

interface ConsultationButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const ConsultationButton = ({ 
  className = '', 
  variant = 'primary',
  fullWidth = false 
}: ConsultationButtonProps) => {
  const baseStyles = "rounded-md transition-colors duration-200 px-6 py-3";
  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "border-2 border-white text-white hover:bg-white/10"
  };
  const widthStyles = fullWidth ? "w-full" : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Wait for scroll to complete before focusing
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 800); // Adjust timing based on scroll duration
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      Schedule Consultation
    </button>
  );
};

export default ConsultationButton;