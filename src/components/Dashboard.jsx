import React, { useState } from "react";
// Import your UserManagement component
import UserManagement from "../pages/UserManagement";

const Dashboard = ({ onNavigate }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (pageId) => {
    console.log("Card clicked:", pageId);
    setActivePage(pageId);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  // If user-management is active, render the UserManagement component
{/* User Management Page */}
{activePage === "user-management" && (
  <UserManagement onNavigate={handleCardClick} />
)}


  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#1e293b",
          color: "white",
          padding: "24px 0",
          flexShrink: 0,
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ padding: "0 24px 24px", borderBottom: "1px solid #334155", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px", color: "white" }}>
            Navigation
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>Admin Panel</p>
        </div>

        {/* Sidebar Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: "0 16px",
          }}
        >
          <button 
            onClick={() => handleCardClick("dashboard")} 
            style={sidebarButtonStyle(activePage === "dashboard")}
          >
            📊 Dashboard
          </button>
          <button 
            onClick={() => handleCardClick("company-settings")} 
            style={sidebarButtonStyle(activePage === "company-settings")}
          >
            ⚙️ Company Settings
          </button>
          <button 
            onClick={() => handleCardClick("notifications")} 
            style={sidebarButtonStyle(activePage === "notifications")}
          >
            🔔 Notifications
          </button>
          <button 
            onClick={() => handleCardClick("user-profile")} 
            style={sidebarButtonStyle(activePage === "user-profile")}
          >
            👤 User Profile
          </button>
          <button 
            onClick={() => handleCardClick("add-new-user")} 
            style={sidebarButtonStyle(activePage === "add-new-user")}
          >
            ➕ Add New User
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* ✅ User Management Page */}
{activePage === "../pages/UserManagement" && (
  <UserManagement onNavigate={handleCardClick} />
)}

          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", marginBottom: "8px" }}>
              Admin Dashboard
            </h1>
            <p style={{ color: "#64748b" }}>Manage your application settings and configurations</p>
          </div>

          {/* ✅ Conditional Rendering */}
          {activePage === "dashboard" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              {/* User Management Card */}
              <div
                onClick={() => handleCardClick("../pages/UserManagement")}
                style={{
                  ...cardStyle,
                  boxShadow: hoveredCard === "user-management"
                    ? "0 8px 16px rgba(59,130,246,0.15)"
                    : cardStyle.boxShadow,
                  borderColor: hoveredCard === "user-management"
                    ? "#3b82f6"
                    : cardStyle.border,
                }}
                onMouseEnter={() => setHoveredCard("user-management")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={iconContainerStyle}>👥</div>
                <h3 style={cardTitleStyle}>User Management</h3>
                <p style={cardDescriptionStyle}>Manage users, roles, and permissions</p>
                <div
                  style={{
                    ...cardHoverStyle,
                    transform: hoveredCard === "user-management"
                      ? "scaleX(1)"
                      : cardHoverStyle.transform,
                  }}
                ></div>
              </div>

              {/* Billing & Payments Card */}
              <div onClick={() => handleCardClick("billing")} style={cardStyle}>
                <div style={iconContainerStyle}>💳</div>
                <h3 style={cardTitleStyle}>Billing & Payments</h3>
                <p style={cardDescriptionStyle}>Manage subscriptions and payment methods</p>
                <div style={cardHoverStyle}></div>
              </div>

              {/* Database Management Card */}
              <div onClick={() => handleCardClick("database")} style={cardStyle}>
                <div style={iconContainerStyle}>💾</div>
                <h3 style={cardTitleStyle}>Database Management</h3>
                <p style={cardDescriptionStyle}>Backup, restore, and manage database</p>
                <div style={cardHoverStyle}></div>
              </div>

              {/* Reservation Management Card */}
              <div onClick={() => handleCardClick("reservation-management")} style={cardStyle}>
                <div style={iconContainerStyle}>📅</div>
                <h3 style={cardTitleStyle}>Reservation Management</h3>
                <p style={cardDescriptionStyle}>Manage bookings, schedules, and availability</p>
                <div style={cardHoverStyle}></div>
              </div>
            </div>
          )}

          {/* 👤 User Profile Form */}
          {activePage === "user-profile" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>User Profile</h2>
              <div style={formStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Name:</label>
                  <input type="text" placeholder="Enter your name" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Email:</label>
                  <input type="email" placeholder="Enter your email" style={inputStyle} />
                </div>
                <button type="button" style={primaryButtonStyle}>Update Profile</button>
              </div>
            </div>
          )}

          {/* ➕ Add New User Form */}
          {activePage === "add-new-user" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Add New User</h2>
              <div style={formStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Username:</label>
                  <input type="text" placeholder="Enter username" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Email:</label>
                  <input type="email" placeholder="Enter email" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Password:</label>
                  <input type="password" placeholder="Enter password" style={inputStyle} />
                </div>
                <button type="button" style={primaryButtonStyle}>Create User</button>
              </div>
            </div>
          )}

          {/* ⚙️ Company Settings */}
          {activePage === "company-settings" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Company Settings</h2>
              <div style={formStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Company Name:</label>
                  <input type="text" placeholder="Enter company name" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Company Email:</label>
                  <input type="email" placeholder="Enter company email" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Company Phone:</label>
                  <input type="tel" placeholder="Enter company phone" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Company Address:</label>
                  <textarea placeholder="Enter company address" style={textareaStyle}></textarea>
                </div>
                <button type="button" style={primaryButtonStyle}>Update Settings</button>
              </div>
            </div>
          )}

          {/* 🔔 Notifications */}
          {activePage === "notifications" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Notification Settings</h2>
              <div style={formStyle}>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} defaultChecked />
                    Email Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>Receive email notifications for important updates</p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                    SMS Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>Receive SMS notifications for urgent matters</p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} defaultChecked />
                    Push Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>Receive push notifications in your browser</p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                    Marketing Emails
                  </label>
                  <p style={checkboxDescriptionStyle}>Receive marketing and promotional emails</p>
                </div>
                <button type="button" style={primaryButtonStyle}>Save Preferences</button>
              </div>
            </div>
          )}

          {/* 💳 Billing Page */}
          {activePage === "billing" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Billing & Payments</h2>
              <div style={formStyle}>
                <div style={billingCardStyle}>
                  <h3 style={billingCardTitleStyle}>Current Plan</h3>
                  <div style={planInfoStyle}>
                    <span style={planNameStyle}>Professional Plan</span>
                    <span style={planPriceStyle}>$29.99/month</span>
                  </div>
                  <p style={planDescriptionStyle}>Access to all premium features and priority support</p>
                </div>
                
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Cardholder Name:</label>
                  <input type="text" placeholder="Enter cardholder name" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Card Number:</label>
                  <input type="text" placeholder="1234 5678 9012 3456" style={inputStyle} />
                </div>
                <div style={cardRowStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>Expiry Date:</label>
                    <input type="text" placeholder="MM/YY" style={inputStyle} />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>CVV:</label>
                    <input type="text" placeholder="123" style={inputStyle} />
                  </div>
                </div>
                <button type="button" style={primaryButtonStyle}>Update Payment Method</button>
              </div>
            </div>
          )}

          {/* 💾 Database Management */}
          {activePage === "database" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Database Management</h2>
              <div style={formStyle}>
                <div style={databaseActionStyle}>
                  <h3 style={databaseActionTitleStyle}>Database Backup</h3>
                  <p style={databaseActionDescriptionStyle}>Create a backup of your database</p>
                  <button type="button" style={secondaryButtonStyle}>Create Backup</button>
                </div>
                
                <div style={databaseActionStyle}>
                  <h3 style={databaseActionTitleStyle}>Database Restore</h3>
                  <p style={databaseActionDescriptionStyle}>Restore database from a backup file</p>
                  <input type="file" style={fileInputStyle} accept=".sql,.db" />
                  <button type="button" style={warningButtonStyle}>Restore Database</button>
                </div>
                
                <div style={databaseActionStyle}>
                  <h3 style={databaseActionTitleStyle}>Database Statistics</h3>
                  <div style={statsContainerStyle}>
                    <div style={statItemStyle}>
                      <span style={statLabelStyle}>Total Users:</span>
                      <span style={statValueStyle}>1,234</span>
                    </div>
                    <div style={statItemStyle}>
                      <span style={statLabelStyle}>Total Reservations:</span>
                      <span style={statValueStyle}>5,678</span>
                    </div>
                    <div style={statItemStyle}>
                      <span style={statLabelStyle}>Database Size:</span>
                      <span style={statValueStyle}>245 MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 📅 Reservation Management */}
          {activePage === "reservation-management" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Reservation Management</h2>
              <div style={formStyle}>
                <div style={reservationStatsStyle}>
                  <div style={reservationStatCardStyle}>
                    <h3 style={statCardTitleStyle}>Today's Reservations</h3>
                    <span style={statCardValueStyle}>24</span>
                  </div>
                  <div style={reservationStatCardStyle}>
                    <h3 style={statCardTitleStyle}>Pending Confirmations</h3>
                    <span style={statCardValueStyle}>7</span>
                  </div>
                  <div style={reservationStatCardStyle}>
                    <h3 style={statCardTitleStyle}>This Week</h3>
                    <span style={statCardValueStyle}>156</span>
                  </div>
                </div>
                
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Filter by Date:</label>
                  <input type="date" style={inputStyle} />
                </div>
                
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Filter by Status:</label>
                  <select style={inputStyle}>
                    <option value="all">All Reservations</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                
                <div style={buttonRowStyle}>
                  <button type="button" style={primaryButtonStyle}>View All Reservations</button>
                  <button type="button" style={secondaryButtonStyle}>Export Data</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Enhanced Styles */
const sidebarButtonStyle = (isActive) => ({
  backgroundColor: isActive ? "#3b82f6" : "transparent",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "12px 16px",
  textAlign: "left",
  cursor: "pointer",
  transition: "all 0.2s ease",
  marginBottom: "4px",
  fontSize: "15px",
  fontWeight: isActive ? "600" : "400",
  width: "100%",
});

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #e2e8f0",
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const iconContainerStyle = {
  fontSize: "32px",
  marginBottom: "16px",
  width: "60px",
  height: "60px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f1f5f9"
};

const cardTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "8px"
};

const cardDescriptionStyle = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.5"
};

const cardHoverStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "4px",
  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.3s ease"
};

const formContainerStyle = {
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "32px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05)",
  border: "1px solid #e2e8f0",
  maxWidth: "800px",
  margin: "0 auto"
};

const formTitleStyle = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "1px solid #e2e8f0"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px"
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#374151"
};

const inputStyle = {
  padding: "12px 16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "all 0.2s ease",
};

const textareaStyle = {
  padding: "12px 16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "all 0.2s ease",
  minHeight: "100px",
  resize: "vertical",
  fontFamily: "inherit"
};

const primaryButtonStyle = {
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  marginTop: "8px"
};

const secondaryButtonStyle = {
  backgroundColor: "#6b7280",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease"
};

const warningButtonStyle = {
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease"
};

// Checkbox styles
const checkboxGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "16px",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  backgroundColor: "#f8fafc"
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  fontWeight: "500",
  color: "#374151",
  cursor: "pointer"
};

const checkboxStyle = {
  width: "16px",
  height: "16px",
  cursor: "pointer"
};

const checkboxDescriptionStyle = {
  fontSize: "14px",
  color: "#6b7280",
  marginLeft: "24px",
  margin: "0"
};

// Billing styles
const billingCardStyle = {
  padding: "20px",
  border: "2px solid #3b82f6",
  borderRadius: "8px",
  backgroundColor: "#f0f9ff"
};

const billingCardTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "12px"
};

const planInfoStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px"
};

const planNameStyle = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#374151"
};

const planPriceStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#3b82f6"
};

const planDescriptionStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0"
};

const cardRowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px"
};

// Database styles
const databaseActionStyle = {
  padding: "20px",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  backgroundColor: "#f8fafc"
};

const databaseActionTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "8px"
};

const databaseActionDescriptionStyle = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "16px"
};

const fileInputStyle = {
  padding: "8px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "14px",
  marginBottom: "12px",
  width: "100%"
};

const statsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px"
};

const statItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px",
  backgroundColor: "white",
  borderRadius: "6px",
  border: "1px solid #e2e8f0"
};

const statLabelStyle = {
  fontSize: "14px",
  color: "#6b7280"
};

const statValueStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e293b"
};

// Reservation styles
const reservationStatsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
  marginBottom: "24px"
};

const reservationStatCardStyle = {
  padding: "20px",
  backgroundColor: "#f1f5f9",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  textAlign: "center"
};

const statCardTitleStyle = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "8px",
  fontWeight: "500"
};

const statCardValueStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#3b82f6"
};

const buttonRowStyle = {
  display: "flex",
  gap: "12px",
  marginTop: "16px"
};

export default Dashboard;