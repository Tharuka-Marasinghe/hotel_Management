import React from 'react';

const Dashboard = ({ onNavigate }) => {
  console.log('Dashboard component rendered');
  console.log('onNavigate prop:', onNavigate);

  const handleCardClick = (pageId) => {
    console.log('Card clicked:', pageId);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      console.error('onNavigate is not defined');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        padding: '24px 0',
        flexShrink: 0
      }}>
        <div style={{ paddingLeft: '24px', paddingRight: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>
            Navigation
          </h2>
        </div>

        {/* Sidebar Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '24px', paddingRight: '24px' }}>
          <button
            onClick={() => handleCardClick('company-settings')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>⚙️</span>
            Company Settings
          </button>

          <button
            onClick={() => handleCardClick('notifications')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>🔔</span>
            Notifications
          </button>

          <button
            onClick={() => handleCardClick('user-profile')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>👤</span>
            User Profile
          </button>

          <button
            onClick={() => handleCardClick('add-new-user')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>➕</span>
            Add New User
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>
              Admin Dashboard
            </h1>
            <p style={{ color: '#666' }}>Manage your application settings and configurations</p>
          </div>

          {/* Main Dashboard Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {/* User Management Card */}
            <div
              onClick={() => handleCardClick('user-management')}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#dcfce7',
                  padding: '12px',
                  borderRadius: '8px',
                  flexShrink: 0
                }}>
                  👥
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                    User Management
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    Manage users, roles, and permissions
                  </p>
                </div>
              </div>
            </div>

            {/* Billing & Payments Card */}
            <div
              onClick={() => handleCardClick('billing')}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#fce7f3',
                  padding: '12px',
                  borderRadius: '8px',
                  flexShrink: 0
                }}>
                  💳
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                    Billing & Payments
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    Manage subscriptions and payment methods
                  </p>
                </div>
              </div>
            </div>

            {/* Database Management Card */}
            <div
              onClick={() => handleCardClick('database')}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#f1f5f9',
                  padding: '12px',
                  borderRadius: '8px',
                  flexShrink: 0
                }}>
                  💾
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                    Database Management
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    Backup, restore, and manage database
                  </p>
                </div>
              </div>
            </div>

            {/* Reservation Management Card - New */}
            <div
              onClick={() => handleCardClick('reservation-management')}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#fef3c7',
                  padding: '12px',
                  borderRadius: '8px',
                  flexShrink: 0
                }}>
                  📅
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                    Reservation Management
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    Manage bookings, schedules, and availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;