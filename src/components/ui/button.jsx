import React from 'react';
import clsx from 'clsx';

export const Button = ({
  children,
  type = 'button',
  variant = 'solid',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded px-4 py-2 font-semibold transition-all';
  const variants = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:underline',
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
