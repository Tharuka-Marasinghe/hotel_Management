import React from 'react';

const date = new Date();
const time = date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});

function DateTime() {
  return (
    <div className='text-sm text-gray-500 dark:text-gray-400'>
      {date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}{' '}
      at {time}
    </div>
  );
}

export default DateTime;
