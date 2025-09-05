import React from 'react';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarLink = ({ to, icon, label, className = '' }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-lg group 
        text-gray-900 dark:text-white 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        ${isActive ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : ''} 
        ${className}`
      }
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className='w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
        />
      )}
      <span className='ms-3'>{label}</span>
    </NavLink>
  );
};

export default SidebarLink;
