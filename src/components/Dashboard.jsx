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
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>
          Admin Dashboard
        </h1>
        <p style={{ color: '#666' }}>Manage your application settings and configurations</p>
      </div>

      {/* Simple grid with inline styles to test */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '24px' 
      }}>
        {/* Test Card 1 */}
        <div
          onClick={() => handleCardClick('company-settings')}
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
              backgroundColor: '#dbeafe',
              padding: '12px',
              borderRadius: '8px',
              flexShrink: 0
            }}>
              ⚙️
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                Company Settings
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Edit company name, logo, colors, and fonts
              </p>
            </div>
          </div>
        </div>

        {/* Test Card 2 */}
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

        {/* Test Card 3 */}
        <div
          onClick={() => handleCardClick('content-management')}
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
              backgroundColor: '#fed7aa',
              padding: '12px',
              borderRadius: '8px',
              flexShrink: 0
            }}>
              📄
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                Content Management
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Manage website content and pages
              </p>
            </div>
          </div>
        </div>

        {/* Test Card 4 */}
        <div
          onClick={() => handleCardClick('analytics')}
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
              backgroundColor: '#e9d5ff',
              padding: '12px',
              borderRadius: '8px',
              flexShrink: 0
            }}>
              📊
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                Analytics
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                View reports and analytics data
              </p>
            </div>
          </div>
        </div>

        {/* Adding remaining cards */}
        <div
          onClick={() => handleCardClick('security')}
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{
              backgroundColor: '#fee2e2',
              padding: '12px',
              borderRadius: '8px',
              flexShrink: 0
            }}>
              🛡️
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                Security Settings
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Configure security and privacy settings
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => handleCardClick('notifications')}
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{
              backgroundColor: '#cffafe',
              padding: '12px',
              borderRadius: '8px',
              flexShrink: 0
            }}>
              🔔
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
                Notifications
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Manage email and push notifications
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Dashboard;