import React from 'react';
import { Building2, LogOut, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const TopBar = () => {
  const { user, companySettings, logout } = useApp();

  return (
    <div 
      className="bg-white shadow-sm border-b px-6 py-4"
      style={{ borderColor: companySettings.primaryColor + '20' }}
    >
      <div className="flex items-center justify-between">
        {/* Left: Logo + Company */}
        <div className="flex items-center space-x-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: companySettings.primaryColor + '15' }}
          >
            {companySettings.logo ? (
              <img 
                src={companySettings.logo} 
                alt="Company Logo" 
                className="w-8 h-8 object-contain"
              />
            ) : (
              <Building2 
                className="w-7 h-7" 
                style={{ color: companySettings.primaryColor }}
              />
            )}
          </div>
          <h1 
            className="text-xl font-bold"
            style={{ 
              color: companySettings.primaryColor,
              fontFamily: companySettings.fontFamily 
            }}
          >
            {companySettings.name}
          </h1>
        </div>

        {/* Right: User + Logout */}
        <div className="flex items-center space-x-6">
          {user && (
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">{user.name}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {user.role}
              </span>
            </div>
          )}
          
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 
                       hover:text-red-600 hover:bg-red-50 rounded-lg 
                       transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
