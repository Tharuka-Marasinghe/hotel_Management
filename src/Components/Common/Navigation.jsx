import React from 'react';
import Button from './Button';
import Badge from './Badge';
import DateTime from './DateTime';

function Navigation() {
  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 ms-0 sm:ms-64'>
        <div className='px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-end'>
          <DateTime />
        </div>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <a
            href='https://flowbite.com'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              TechCorp Solutions
            </span>
          </a>
          <div className='flex items-center space-x-6 rtl:space-x-reverse'>
            <div className='text-sm  text-gray-500 dark:text-white'>
              Welcome, <span className='font-medium me-2'>Dimuth</span>{' '}
              <Badge text='Admin' color='yellow' />
            </div>
            <div className='relative me-6'>
              <img
                className='w-8 h-8 rounded-full'
                src='/docs/images/people/profile-picture-5.jpg'
                alt='profile image'
              />
              <span className='top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
            </div>
            <Button text='Logout' className='hidden sm:inline-block' />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
