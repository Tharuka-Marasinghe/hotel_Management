import React from 'react';

function MessageDate({ date, className = '' }) {
  return (
    <time
      className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}
    >
      {date}
    </time>
  );
}

export default MessageDate;
