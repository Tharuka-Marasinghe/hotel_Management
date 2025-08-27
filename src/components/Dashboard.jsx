import React, { useState } from "react";

const Dashboard = ({ onNavigate }) => {
  const [activePage, setActivePage] = useState("dashboard"); // default dashboard view

  const handleCardClick = (pageId) => {
    console.log("Card clicked:", pageId);
    setActivePage(pageId); // update state
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "white",
          borderRight: "1px solid #e5e7eb",
          padding: "24px 0",
          flexShrink: 0,
        }}
      >
        <div style={{ paddingLeft: "24px", paddingRight: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#111", marginBottom: "8px" }}>
            Navigation
          </h2>
        </div>

        {/* Sidebar Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <button onClick={() => handleCardClick("company-settings")}>⚙️ Company Settings</button>
          <button onClick={() => handleCardClick("notifications")}>🔔 Notifications</button>
          <button onClick={() => handleCardClick("user-profile")}>👤 User Profile</button>
          <button onClick={() => handleCardClick("add-new-user")}>➕ Add New User</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#111", marginBottom: "8px" }}>
              Admin Dashboard
            </h1>
            <p style={{ color: "#666" }}>Manage your application settings and configurations</p>
          </div>

          {/* ✅ Conditional Rendering */}
          {activePage === "dashboard" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* User Management Card */}
              <div onClick={() => handleCardClick("user-management")} style={cardStyle}>
                👥 <b>User Management</b>
                <p>Manage users, roles, and permissions</p>
              </div>

              {/* Billing & Payments Card */}
              <div onClick={() => handleCardClick("billing")} style={cardStyle}>
                💳 <b>Billing & Payments</b>
                <p>Manage subscriptions and payment methods</p>
              </div>

              {/* Database Management Card */}
              <div onClick={() => handleCardClick("database")} style={cardStyle}>
                💾 <b>Database Management</b>
                <p>Backup, restore, and manage database</p>
              </div>

              {/* Reservation Management Card */}
              <div onClick={() => handleCardClick("reservation-management")} style={cardStyle}>
                📅 <b>Reservation Management</b>
                <p>Manage bookings, schedules, and availability</p>
              </div>
            </div>
          )}

          {/* 👤 User Profile Form */}
          {activePage === "user-profile" && (
            <div style={formStyle}>
              <h2>User Profile</h2>
              <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Update Profile</button>
              </form>
            </div>
          )}

          {/* ➕ Add New User Form */}
          {activePage === "add-new-user" && (
            <div style={formStyle}>
              <h2>Add New User</h2>
              <form>
                <label>Username:</label>
                <input type="text" placeholder="Enter username" />
                <label>Email:</label>
                <input type="email" placeholder="Enter email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
                <button type="submit">Create User</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Shared Styles */
const cardStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "24px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const formStyle = {
  backgroundColor: "white",
  padding: "24px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

export default Dashboard;
