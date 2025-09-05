import React from 'react';

function Label({ text, htmlFor, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
    >
      {text}
    </label>
  );
}

export default Label;
