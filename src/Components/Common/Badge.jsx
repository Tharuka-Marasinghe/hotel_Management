import React from 'react';

const Badge = ({ text, color = 'green', className = '' }) => {
  // Tailwind color classes for light and dark mode
  const colors = {
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    yellow:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };

  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ${colors[color]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
