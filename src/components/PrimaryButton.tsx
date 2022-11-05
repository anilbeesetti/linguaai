import React from "react";

type Props = {
    children: React.ReactNode,
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

const PrimaryButton = ({ children, className, onClick}: Props) => {
  return (
    <button 
    className={`px-3 py-2 bg-primary-500 hover:scale-105 rounded-md text-white transition-all duration-150 ${className}`}
    onClick = {onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
