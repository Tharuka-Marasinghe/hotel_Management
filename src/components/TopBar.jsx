import React from 'react';
import { Building2, LogOut, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const TopBar = () => {
  const { user, companySettings, logout } = useApp();

  const styles = {
    container: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 1.5rem'
    },
    innerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '80rem',
      margin: '0 auto'
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    logoContainer: {
      backgroundColor: '#eff6ff',
      padding: '0.5rem',
      borderRadius: '0.5rem'
    },
    logoImage: {
      width: '2rem',
      height: '2rem',
      objectFit: 'contain'
    },
    companyName: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#2563eb',
      fontFamily: 'sans-serif'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    userIconContainer: {
      backgroundColor: '#f3f4f6',
      padding: '0.5rem',
      borderRadius: '50%'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    userName: {
      color: '#1f2937',
      fontWeight: '500',
      fontSize: '0.875rem'
    },
    userRole: {
      fontSize: '0.75rem',
      color: '#6b7280',
      backgroundColor: '#f3f4f6',
      padding: '0.125rem 0.5rem',
      borderRadius: '9999px',
      textAlign: 'center'
    },
    logoutButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      color: '#4b5563',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      borderRadius: '0.5rem',
      transition: 'all 0.2s',
      fontWeight: '500',
      cursor: 'pointer'
    },
    logoutButtonHover: {
      color: '#dc2626',
      backgroundColor: '#fef2f2',
      borderColor: '#fecaca'
    },
    logoutText: {
      fontSize: '0.875rem'
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Left: Logo + Company */}
        <div style={styles.leftSection}>
          <div style={styles.logoContainer}>
            {companySettings.logo ? (
              <img 
                src={companySettings.logo} 
                alt="Company Logo" 
                style={styles.logoImage}
              />
            ) : (
              <Building2 size={28} color="#2563eb" />
            )}
          </div>
          <h1 style={styles.companyName}>
            {companySettings.name || 'TechCorp Solutions'}
          </h1>
        </div>

        {/* Right: User + Logout */}
        <div style={styles.rightSection}>
          {user && (
            <div style={styles.userSection}>
              <div style={styles.userIconContainer}>
                <User size={20} color="#4b5563" />
              </div>
              <div style={styles.userInfo}>
                <span style={styles.userName}>
                  {user.name || 'John Anderson'}
                </span>
                <span style={styles.userRole}>
                  {user.role || 'Admin'}
                </span>
              </div>
            </div>
          )}
          
          <button
            onClick={logout}
            style={{
              ...styles.logoutButton,
              ...(isHovered ? styles.logoutButtonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <LogOut size={16} />
            <span style={styles.logoutText}>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;