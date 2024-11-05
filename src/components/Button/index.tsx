'use client'
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({label, onClick}: ButtonProps) => {
  return (
    <button  className='flex p-2 cursor-pointer rounded bg-blue-300 md:w-1/12 justify-center text-black'
    onClick={onClick}>
        <p>{label}</p>
    </button>
  );
};

export default Button;