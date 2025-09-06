import React, { useState } from "react";
// Import your UserManagement component
import UserManagement from "../pages/UserManagement";
// Import ReservationManagement components
import RoomAvailability from "../pages/ReservationManagement/RoomAvailability";
import ReservedRoomInfo from "../pages/ReservationManagement/RecervedRoomInfo";
import ReservationHome from "../pages/ReservationHome/ReservationHome";

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
        <div
          style={{
            padding: "0 24px 24px",
            borderBottom: "1px solid #334155",
            marginBottom: "24px",
          }}
        >
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
          <button onClick={() => handleCardClick("dashboard")} style={sidebarButtonStyle(activePage === "dashboard")}>
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
          {/* <button
            onClick={() => handleCardClick("reservation-home")}
            style={sidebarButtonStyle(activePage === "reservation-home")}
          >
            🏠 Reservation Home
          </button> */}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* User Management Page */}
          {activePage === "user-management" && <UserManagement onNavigate={handleCardClick} />}

          {/* Room Availability Page */}
          {activePage === "room-availability" && <RoomAvailability onNavigate={handleCardClick} />}

          {/* Reserved Room Info Page */}
          {activePage === "reserved-room-info" && <ReservedRoomInfo onNavigate={handleCardClick} />}

          {/* Reservation Home Page (fixed placement) */}
          {activePage === "reservation-home" && <ReservationHome onNavigate={handleCardClick} />}

          {/* Dashboard Header */}
          {(activePage === "dashboard" ||
            activePage === "company-settings" ||
            activePage === "notifications" ||
            activePage === "user-profile" ||
            activePage === "add-new-user" ||
            activePage === "billing" ||
            activePage === "database" ||
            activePage === "reservation-management") && (
            <div style={{ marginBottom: "32px" }}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  marginBottom: "8px",
                }}
              >
                Admin Dashboard
              </h1>
              <p style={{ color: "#64748b" }}>Manage your application settings and configurations</p>
            </div>
          )}

          {/* Dashboard Cards */}
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
                onClick={() => handleCardClick("user-management")}
                style={{
                  ...cardStyle,
                  boxShadow:
                    hoveredCard === "user-management"
                      ? "0 8px 16px rgba(59,130,246,0.15)"
                      : cardStyle.boxShadow,
                  borderColor:
                    hoveredCard === "user-management" ? "#3b82f6" : cardStyle.border,
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
                    transform:
                      hoveredCard === "user-management" ? "scaleX(1)" : cardHoverStyle.transform,
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

          {/* User Profile Form */}
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
                <button type="button" style={primaryButtonStyle}>
                  Update Profile
                </button>
              </div>
            </div>
          )}

          {/* Add New User Form */}
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
                <button type="button" style={primaryButtonStyle}>
                  Create User
                </button>
              </div>
            </div>
          )}

          {/* Company Settings */}
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
                <button type="button" style={primaryButtonStyle}>
                  Update Settings
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activePage === "notifications" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Notification Settings</h2>
              <div style={formStyle}>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} defaultChecked />
                    Email Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>
                    Receive email notifications for important updates
                  </p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                    SMS Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>
                    Receive SMS notifications for urgent matters
                  </p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} defaultChecked />
                    Push Notifications
                  </label>
                  <p style={checkboxDescriptionStyle}>
                    Receive push notifications in your browser
                  </p>
                </div>
                <div style={checkboxGroupStyle}>
                  <label style={checkboxLabelStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                    Marketing Emails
                  </label>
                  <p style={checkboxDescriptionStyle}>
                    Receive marketing and promotional emails
                  </p>
                </div>
                <button type="button" style={primaryButtonStyle}>
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Billing Page */}
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
                  <p style={planDescriptionStyle}>
                    Access to all premium features and priority support
                  </p>
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
                <button type="button" style={primaryButtonStyle}>
                  Update Payment Method
                </button>
              </div>
            </div>
          )}

          {/* Database Management */}
          {activePage === "database" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Database Management</h2>
              <div style={formStyle}>
                <div style={databaseActionStyle}>
                  <h3 style={databaseActionTitleStyle}>Database Backup</h3>
                  <p style={databaseActionDescriptionStyle}>Create a backup of your database</p>
                  <button type="button" style={secondaryButtonStyle}>
                    Create Backup
                  </button>
                </div>

                <div style={databaseActionStyle}>
                  <h3 style={databaseActionTitleStyle}>Database Restore</h3>
                  <p style={databaseActionDescriptionStyle}>
                    Restore database from a backup file
                  </p>
                  <input type="file" style={fileInputStyle} accept=".sql,.db" />
                  <button type="button" style={warningButtonStyle}>
                    Restore Database
                  </button>
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

          {/* Reservation Management */}
          {activePage === "reservation-management" && (
            <div style={formContainerStyle}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <button
                  onClick={() => handleCardClick("dashboard")}
                  style={{
                    backgroundColor: "transparent",
                    color: "#6b7280",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  ← Back to Dashboard
                </button>
                <h2 style={{ ...formTitleStyle, margin: "0", paddingBottom: "0", border: "none" }}>
                  Reservation Management
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "24px",
                  marginTop: "24px",
                }}
              >
                {/* Room Availability Card */}
                <div
                  onClick={() => handleCardClick("room-availability")}
                  style={{
                    ...cardStyle,
                    boxShadow:
                      hoveredCard === "room-availability"
                        ? "0 8px 16px rgba(34,197,94,0.15)"
                        : cardStyle.boxShadow,
                    borderColor:
                      hoveredCard === "room-availability" ? "#22c55e" : cardStyle.border,
                  }}
                  onMouseEnter={() => setHoveredCard("room-availability")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ ...iconContainerStyle, backgroundColor: "#f0fdf4" }}>🏨</div>
                  <h3 style={cardTitleStyle}>Room Availability</h3>
                  <p style={cardDescriptionStyle}>
                    Check room status, availability, and manage room assignments
                  </p>
                  <div
                    style={{
                      ...cardHoverStyle,
                      background: "linear-gradient(90deg, #22c55e, #4ade80)",
                      transform:
                        hoveredCard === "room-availability"
                          ? "scaleX(1)"
                          : cardHoverStyle.transform,
                    }}
                  ></div>
                </div>

                {/* Reserved Room Information Card */}
                <div
                  onClick={() => handleCardClick("reserved-room-info")}
                  style={{
                    ...cardStyle,
                    boxShadow:
                      hoveredCard === "reserved-room-info"
                        ? "0 8px 16px rgba(239,68,68,0.15)"
                        : cardStyle.boxShadow,
                    borderColor:
                      hoveredCard === "reserved-room-info" ? "#ef4444" : cardStyle.border,
                  }}
                  onMouseEnter={() => setHoveredCard("reserved-room-info")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ ...iconContainerStyle, backgroundColor: "#fef2f2" }}>📋</div>
                  <h3 style={cardTitleStyle}>Reserved Room Information</h3>
                  <p style={cardDescriptionStyle}>
                    View and manage current reservations and booking details
                  </p>
                  <div
                    style={{
                      ...cardHoverStyle,
                      background: "linear-gradient(90deg, #ef4444, #f87171)",
                      transform:
                        hoveredCard === "reserved-room-info"
                          ? "scaleX(1)"
                          : cardHoverStyle.transform,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ========== Styles ==========
const sidebarButtonStyle = (isActive) => ({
  textAlign: "left",
  padding: "12px 16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "15px",
  transition: "all 0.2s ease",
  color: isActive ? "#fff" : "#cbd5e1",
  backgroundColor: isActive ? "#3b82f6" : "transparent",
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "24px",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const iconContainerStyle = {
  fontSize: "28px",
  marginBottom: "16px",
  backgroundColor: "#f8fafc",
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#1e293b",
};

const cardDescriptionStyle = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.5",
};

const cardHoverStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "3px",
  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.3s ease",
};

const formContainerStyle = {
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  marginBottom: "32px",
};

const formTitleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  marginBottom: "24px",
  color: "#1e293b",
  paddingBottom: "16px",
  borderBottom: "1px solid #e5e7eb",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  fontSize: "14px",
  color: "#475569",
  fontWeight: "500",
};

const inputStyle = {
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "100px",
  resize: "vertical",
};

const primaryButtonStyle = {
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
};

const secondaryButtonStyle = {
  backgroundColor: "#22c55e",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
};

const warningButtonStyle = {
  backgroundColor: "#ef4444",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
};

const checkboxGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "15px",
  color: "#1e293b",
};

const checkboxStyle = {
  width: "16px",
  height: "16px",
  cursor: "pointer",
};

const checkboxDescriptionStyle = {
  fontSize: "13px",
  color: "#64748b",
  marginLeft: "24px",
};

const billingCardStyle = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "24px",
};

const billingCardTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "12px",
};

const planInfoStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const planNameStyle = {
  fontWeight: "500",
  color: "#1e293b",
};

const planPriceStyle = {
  fontWeight: "600",
  color: "#3b82f6",
};

const planDescriptionStyle = {
  fontSize: "13px",
  color: "#64748b",
};

const cardRowStyle = {
  display: "flex",
  gap: "16px",
};

const databaseActionStyle = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const databaseActionTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "8px",
};

const databaseActionDescriptionStyle = {
  fontSize: "14px",
  color: "#64748b",
  marginBottom: "12px",
};

const fileInputStyle = {
  marginBottom: "12px",
  fontSize: "14px",
};

const statsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const statItemStyle = {
  backgroundColor: "white",
  padding: "12px",
  borderRadius: "8px",
  textAlign: "center",
};

const statLabelStyle = {
  fontSize: "13px",
  color: "#64748b",
};

const statValueStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e293b",
};

export default Dashboard;
