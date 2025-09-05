import React from 'react';

function MessageCard({ name, message, time }) {
  return (
    <li>
      <a
        href='#'
        className='items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        <img
          className='w-12 h-12 mb-3 me-3 rounded-full sm:mb-0'
          src='/docs/images/people/profile-picture-1.jpg'
          alt='Jese Leos image'
        />
        <div className='text-gray-600 dark:text-gray-400'>
          <div className='text-base font-normal'>
            <span className='font-medium text-gray-900 dark:text-white'>
              {name}
            </span>
          </div>
          <div className='text-sm font-normal'>{message}</div>
          {time}
        </div>
      </a>
    </li>
  );
}

export default MessageCard;
