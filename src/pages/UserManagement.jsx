import React, { useState } from 'react';

const UserManagement = ({ onNavigate }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-15',
      createdDate: '2023-06-10'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '2024-01-14',
      createdDate: '2023-08-22'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2023-12-20',
      createdDate: '2023-11-05'
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-01-13',
      createdDate: '2023-09-18'
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@example.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '2024-01-12',
      createdDate: '2023-07-30'
    }
  ]);

  const [activeTab, setActiveTab] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'User',
    password: '',
    confirmPassword: ''
  });

  // Filter users based on search term, role, and status
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.password && newUser.password === newUser.confirmPassword) {
      const user = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        status: 'Active',
        lastLogin: 'Never',
        createdDate: new Date().toISOString().split('T')[0]
      };
      setUsers([...users, user]);
      setNewUser({ name: '', email: '', role: 'User', password: '', confirmPassword: '' });
      setActiveTab('list');
    }
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
    setActiveTab('edit');
  };

  const handleUpdateUser = () => {
    if (editingUser.name && editingUser.email) {
      setUsers(users.map(user => 
        user.id === editingUser.id ? editingUser : user
      ));
      setEditingUser(null);
      setActiveTab('list');
    }
  };

  const handleDeleteUser = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(user => user.id !== userToDelete.id));
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ));
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin': return '#ef4444';
      case 'Manager': return '#f59e0b';
      case 'User': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? '#10b981' : '#ef4444';
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <button 
            onClick={() => onNavigate('dashboard')}
            style={backButtonStyle}
          >
            ← Back to Dashboard
          </button>
          <h1 style={titleStyle}>User Management</h1>
          <p style={subtitleStyle}>Manage users, roles, and permissions across your application</p>
        </div>

        {/* Tab Navigation */}
        <div style={tabContainerStyle}>
          <button 
            onClick={() => setActiveTab('list')}
            style={activeTab === 'list' ? activeTabStyle : inactiveTabStyle}
          >
            👥 User List ({users.length})
          </button>
          <button 
            onClick={() => setActiveTab('add')}
            style={activeTab === 'add' ? activeTabStyle : inactiveTabStyle}
          >
            ➕ Add User
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            style={activeTab === 'analytics' ? activeTabStyle : inactiveTabStyle}
          >
            📊 Analytics
          </button>
        </div>

        {/* User List Tab */}
        {activeTab === 'list' && (
          <div style={contentContainerStyle}>
            {/* Filters and Search */}
            <div style={filterContainerStyle}>
              <div style={searchContainerStyle}>
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={searchInputStyle}
                />
              </div>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                style={filterSelectStyle}
              >
                <option value="all">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={filterSelectStyle}
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Users Table */}
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRowStyle}>
                    <th style={tableHeaderStyle}>User</th>
                    <th style={tableHeaderStyle}>Role</th>
                    <th style={tableHeaderStyle}>Status</th>
                    <th style={tableHeaderStyle}>Last Login</th>
                    <th style={tableHeaderStyle}>Created</th>
                    <th style={tableHeaderStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id} style={tableRowStyle}>
                      <td style={tableCellStyle}>
                        <div style={userInfoStyle}>
                          <div style={avatarStyle}>
                            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </div>
                          <div>
                            <div style={userNameStyle}>{user.name}</div>
                            <div style={userEmailStyle}>{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td style={tableCellStyle}>
                        <span style={{
                          ...roleBadgeStyle,
                          backgroundColor: getRoleColor(user.role) + '20',
                          color: getRoleColor(user.role)
                        }}>
                          {user.role}
                        </span>
                      </td>
                      <td style={tableCellStyle}>
                        <span style={{
                          ...statusBadgeStyle,
                          backgroundColor: getStatusColor(user.status) + '20',
                          color: getStatusColor(user.status)
                        }}>
                          {user.status}
                        </span>
                      </td>
                      <td style={tableCellStyle}>{user.lastLogin}</td>
                      <td style={tableCellStyle}>{user.createdDate}</td>
                      <td style={tableCellStyle}>
                        <div style={actionButtonsStyle}>
                          <button 
                            onClick={() => handleEditUser(user)}
                            style={editButtonStyle}
                            title="Edit User"
                          >
                            ✏️
                          </button>
                          <button 
                            onClick={() => toggleUserStatus(user.id)}
                            style={toggleButtonStyle}
                            title={user.status === 'Active' ? 'Deactivate' : 'Activate'}
                          >
                            {user.status === 'Active' ? '🔒' : '🔓'}
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user)}
                            style={deleteButtonStyle}
                            title="Delete User"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={tableFooterStyle}>
              Showing {filteredUsers.length} of {users.length} users
            </div>
          </div>
        )}

        {/* Add User Tab */}
        {activeTab === 'add' && (
          <div style={contentContainerStyle}>
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Add New User</h2>
              <div style={formStyle}>
                <div style={formRowStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      value={newUser.name}
                      onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                      placeholder="Enter full name"
                      style={inputStyle}
                    />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                      placeholder="Enter email address"
                      style={inputStyle}
                    />
                  </div>
                </div>
                
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    style={inputStyle}
                  >
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div style={formRowStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Password *</label>
                    <input
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      placeholder="Enter password"
                      style={inputStyle}
                    />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Confirm Password *</label>
                    <input
                      type="password"
                      value={newUser.confirmPassword}
                      onChange={(e) => setNewUser({...newUser, confirmPassword: e.target.value})}
                      placeholder="Confirm password"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {newUser.password && newUser.confirmPassword && newUser.password !== newUser.confirmPassword && (
                  <div style={errorMessageStyle}>
                    Passwords do not match
                  </div>
                )}

                <div style={buttonContainerStyle}>
                  <button 
                    onClick={() => setActiveTab('list')}
                    style={cancelButtonStyle}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddUser}
                    style={primaryButtonStyle}
                    disabled={!newUser.name || !newUser.email || !newUser.password || newUser.password !== newUser.confirmPassword}
                  >
                    Create User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit User Tab */}
        {activeTab === 'edit' && editingUser && (
          <div style={contentContainerStyle}>
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Edit User: {editingUser.name}</h2>
              <div style={formStyle}>
                <div style={formRowStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                </div>
                
                <div style={formRowStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Role</label>
                    <select
                      value={editingUser.role}
                      onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                      style={inputStyle}
                    >
                      <option value="User">User</option>
                      <option value="Manager">Manager</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Status</label>
                    <select
                      value={editingUser.status}
                      onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
                      style={inputStyle}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div style={buttonContainerStyle}>
                  <button 
                    onClick={() => setActiveTab('list')}
                    style={cancelButtonStyle}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleUpdateUser}
                    style={primaryButtonStyle}
                  >
                    Update User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div style={contentContainerStyle}>
            <h2 style={formTitleStyle}>User Analytics</h2>
            
            <div style={analyticsGridStyle}>
              <div style={analyticCardStyle}>
                <h3 style={analyticTitleStyle}>Total Users</h3>
                <div style={analyticValueStyle}>{users.length}</div>
                <div style={analyticSubtitleStyle}>All registered users</div>
              </div>
              
              <div style={analyticCardStyle}>
                <h3 style={analyticTitleStyle}>Active Users</h3>
                <div style={analyticValueStyle}>{users.filter(u => u.status === 'Active').length}</div>
                <div style={analyticSubtitleStyle}>Currently active</div>
              </div>
              
              <div style={analyticCardStyle}>
                <h3 style={analyticTitleStyle}>Admins</h3>
                <div style={analyticValueStyle}>{users.filter(u => u.role === 'Admin').length}</div>
                <div style={analyticSubtitleStyle}>Administrator accounts</div>
              </div>
              
              <div style={analyticCardStyle}>
                <h3 style={analyticTitleStyle}>New This Month</h3>
                <div style={analyticValueStyle}>
                  {users.filter(u => new Date(u.createdDate) > new Date(Date.now() - 30*24*60*60*1000)).length}
                </div>
                <div style={analyticSubtitleStyle}>Last 30 days</div>
              </div>
            </div>

            <div style={roleDistributionStyle}>
              <h3 style={formTitleStyle}>Role Distribution</h3>
              <div style={roleChartStyle}>
                {['Admin', 'Manager', 'User'].map(role => {
                  const count = users.filter(u => u.role === role).length;
                  const percentage = users.length > 0 ? (count / users.length * 100).toFixed(1) : 0;
                  return (
                    <div key={role} style={roleItemStyle}>
                      <div style={roleBarContainerStyle}>
                        <div style={roleLabelStyle}>{role}</div>
                        <div style={roleBarStyle}>
                          <div 
                            style={{
                              ...roleBarFillStyle,
                              width: `${percentage}%`,
                              backgroundColor: getRoleColor(role)
                            }}
                          />
                        </div>
                        <div style={roleCountStyle}>{count} ({percentage}%)</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div style={modalOverlayStyle}>
            <div style={modalStyle}>
              <h3 style={modalTitleStyle}>Confirm Deletion</h3>
              <p style={modalTextStyle}>
                Are you sure you want to delete user "{userToDelete?.name}"? This action cannot be undone.
              </p>
              <div style={modalButtonsStyle}>
                <button 
                  onClick={() => setShowDeleteModal(false)}
                  style={cancelButtonStyle}
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDelete}
                  style={deleteConfirmButtonStyle}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const backButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#3b82f6',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '16px',
  padding: '8px 0',
  fontWeight: '500'
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#1e293b',
  marginBottom: '8px'
};

const subtitleStyle = {
  color: '#64748b',
  fontSize: '16px'
};

const tabContainerStyle = {
  display: 'flex',
  borderBottom: '1px solid #e2e8f0',
  marginBottom: '32px'
};

const activeTabStyle = {
  padding: '12px 24px',
  border: 'none',
  borderBottom: '2px solid #3b82f6',
  backgroundColor: 'transparent',
  color: '#3b82f6',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '16px'
};

const inactiveTabStyle = {
  padding: '12px 24px',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#64748b',
  cursor: 'pointer',
  fontSize: '16px'
};

const contentContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.04)',
  border: '1px solid #e2e8f0'
};

const filterContainerStyle = {
  display: 'flex',
  gap: '16px',
  marginBottom: '24px',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const searchContainerStyle = {
  flex: 1,
  minWidth: '300px'
};

const searchInputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '16px'
};

const filterSelectStyle = {
  padding: '12px 16px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '16px',
  minWidth: '140px'
};

const tableContainerStyle = {
  overflowX: 'auto',
  marginBottom: '16px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};

const tableHeaderRowStyle = {
  borderBottom: '2px solid #e2e8f0'
};

const tableHeaderStyle = {
  padding: '16px 12px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '600',
  color: '#374151',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const tableRowStyle = {
  borderBottom: '1px solid #f1f5f9'
};

const tableCellStyle = {
  padding: '16px 12px',
  verticalAlign: 'middle'
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};

const avatarStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: '600'
};

const userNameStyle = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#1e293b'
};

const userEmailStyle = {
  fontSize: '14px',
  color: '#64748b'
};

const roleBadgeStyle = {
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const statusBadgeStyle = {
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600'
};

const actionButtonsStyle = {
  display: 'flex',
  gap: '8px'
};

const editButtonStyle = {
  padding: '6px 8px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f1f5f9',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s'
};

const toggleButtonStyle = {
  padding: '6px 8px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f1f5f9',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s'
};

const deleteButtonStyle = {
  padding: '6px 8px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#fef2f2',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s'
};

const tableFooterStyle = {
  color: '#64748b',
  fontSize: '14px',
  textAlign: 'center',
  padding: '16px'
};

const formContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto'
};

const formTitleStyle = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1e293b',
  marginBottom: '24px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e2e8f0'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const formRowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#374151'
};

const inputStyle = {
  padding: '12px 16px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '16px',
  transition: 'all 0.2s'
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  marginTop: '24px'
};

const primaryButtonStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const cancelButtonStyle = {
  backgroundColor: '#f8fafc',
  color: '#64748b',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const errorMessageStyle = {
  color: '#ef4444',
  fontSize: '14px',
  padding: '8px 12px',
  backgroundColor: '#fef2f2',
  borderRadius: '6px',
  border: '1px solid #fecaca'
};

const analyticsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px',
  marginBottom: '32px'
};

const analyticCardStyle = {
  padding: '24px',
  backgroundColor: '#f8fafc',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  textAlign: 'center'
};

const analyticTitleStyle = {
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '8px',
  fontWeight: '500'
};

const analyticValueStyle = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#1e293b',
  marginBottom: '4px'
};

const analyticSubtitleStyle = {
  fontSize: '12px',
  color: '#94a3b8'
};

const roleDistributionStyle = {
  marginTop: '32px'
};

const roleChartStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
};

const roleItemStyle = {
  display: 'flex',
  alignItems: 'center'
};

const roleBarContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  width: '100%'
};

const roleLabelStyle = {
  minWidth: '80px',
  fontSize: '14px',
  fontWeight: '500',
  color: '#374151'
};

const roleBarStyle = {
  flex: 1,
  height: '24px',
  backgroundColor: '#f1f5f9',
  borderRadius: '12px',
  overflow: 'hidden'
};

const roleBarFillStyle = {
  height: '100%',
  transition: 'width 0.3s ease',
  borderRadius: '12px'
};

const roleCountStyle = {
  minWidth: '80px',
  fontSize: '14px',
  color: '#64748b',
  textAlign: 'right'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '32px',
  maxWidth: '500px',
  width: '90%',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
};

const modalTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1e293b',
  marginBottom: '16px'
};

const modalTextStyle = {
  color: '#64748b',
  marginBottom: '24px',
  lineHeight: '1.6'
};

const modalButtonsStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end'
};

const deleteConfirmButtonStyle = {
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

export default UserManagement;