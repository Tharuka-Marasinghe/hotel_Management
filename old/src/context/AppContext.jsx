import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Anderson',
    email: 'john@company.com',
    role: 'Admin'
  });

  const [companySettings, setCompanySettings] = useState({
    name: 'TechCorp Solutions',
    logo: '',
    primaryColor: '#3B82F6',
    secondaryColor: '#64748B',
    fontFamily: 'Inter',
    fontSize: '16px'
  });

  const updateCompanySettings = (newSettings) => {
    setCompanySettings(prev => ({ ...prev, ...newSettings }));
  };

  const logout = () => {
    setUser(null);
    // Add logout logic here
    console.log('User logged out');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        companySettings,
        setUser,
        updateCompanySettings,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};