import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import CompanySettings from './pages/CompanySettings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'company-settings':
        return <CompanySettings onBack={handleBackToDashboard} />;
      case 'user-management':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Management</h2>
            <p className="text-gray-600">User management functionality coming soon...</p>
          </div>
        );
      case 'content-management':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Management</h2>
            <p className="text-gray-600">Content management functionality coming soon...</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics</h2>
            <p className="text-gray-600">Analytics functionality coming soon...</p>
          </div>
        );
      case 'security':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Security Settings</h2>
            <p className="text-gray-600">Security settings functionality coming soon...</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
            <p className="text-gray-600">Notifications functionality coming soon...</p>
          </div>
        );
      case 'database':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Database Management</h2>
            <p className="text-gray-600">Database management functionality coming soon...</p>
          </div>
        );
      case 'billing':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Billing & Payments</h2>
            <p className="text-gray-600">Billing functionality coming soon...</p>
          </div>
        );
      default:
        return <Dashboard onNavigate={handleNavigation} />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <main>
          {renderCurrentPage()}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;