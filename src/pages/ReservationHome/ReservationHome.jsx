import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import router navigation
import CheckIn from "../ReservationHome/CheckIn";

const ReservationHome = () => {
  const navigate = useNavigate(); // ✅ create navigation function

  // Demo customers
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Smith", room: "101", checkIn: "2025-09-01", nights: 3 },
    { id: 2, name: "Sarah Johnson", room: "202", checkIn: "2025-09-02", nights: 2 },
    { id: 3, name: "Michael Brown", room: "303", checkIn: "2025-09-03", nights: 1 },
  ]);

  const handleCheckout = (id) => {
    alert(`Customer ID ${id} checked out!`);
    navigate("/checkout"); // ✅ go to checkout page
  };

  const handleEdit = (id) => {
    alert(`Editing details for customer ID ${id}`);
    navigate("/edit-customer"); // ✅ go to edit page
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#e5e7eb",
          padding: "20px",
          borderRight: "1px solid #d1d5db",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>Reservation</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* ✅ Now this goes to CheckIn page */}
          <li style={menuItemStyle} onClick={() => navigate("/checkin")}>
            Check in
          </li>
          <li style={menuItemStyle}>Guest Management</li>
          <li style={menuItemStyle}>Room Management</li>
          <li style={menuItemStyle}>Reports</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Reservation Management
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Supporting line text lorem ipsum dolor sit amet, consectetur.
        </p>

        {/* Customers List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {customers.map((customer) => (
            <div
              key={customer.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Customer Info */}
              <div>
                <h3 style={{ fontWeight: "600", margin: 0 }}>{customer.name}</h3>
                <p style={{ margin: "4px 0", color: "#64748b" }}>
                  Room: {customer.room} | Check-in: {customer.checkIn} | Nights:{" "}
                  {customer.nights}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleEdit(customer.id)}
                  style={editButtonStyle}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleCheckout(customer.id)}
                  style={checkoutButtonStyle}
                >
                  🚪 Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const menuItemStyle = {
  padding: "10px 0",
  cursor: "pointer",
  fontWeight: "500",
  color: "#111827",
};

const editButtonStyle = {
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

const checkoutButtonStyle = {
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ReservationHome;
