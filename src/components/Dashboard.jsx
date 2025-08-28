import React, { useState } from "react";

const Dashboard = ({ onNavigate }) => {
  const [activePage, setActivePage] = useState("dashboard");

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
              <div onClick={() => handleCardClick("user-management")} style={cardStyle}>
                <div style={iconContainerStyle}>👥</div>
                <h3 style={cardTitleStyle}>User Management</h3>
                <p style={cardDescriptionStyle}>Manage users, roles, and permissions</p>
                <div style={cardHoverStyle}></div>
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
              <form style={formStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Name:</label>
                  <input type="text" placeholder="Enter your name" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Email:</label>
                  <input type="email" placeholder="Enter your email" style={inputStyle} />
                </div>
                <button type="submit" style={primaryButtonStyle}>Update Profile</button>
              </form>
            </div>
          )}

          {/* ➕ Add New User Form */}
          {activePage === "add-new-user" && (
            <div style={formContainerStyle}>
              <h2 style={formTitleStyle}>Add New User</h2>
              <form style={formStyle}>
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
                <button type="submit" style={primaryButtonStyle}>Create User</button>
              </form>
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
  ":hover": {
    backgroundColor: isActive ? "#3b82f6" : "#334155",
  }
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
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 15px rgba(0,0,0,0.07), 0 4px 6px rgba(0,0,0,0.05)",
  }
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
  maxWidth: "600px",
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
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)"
  }
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
  marginTop: "8px",
  ":hover": {
    backgroundColor: "#2563eb"
  }
};

export default Dashboard;