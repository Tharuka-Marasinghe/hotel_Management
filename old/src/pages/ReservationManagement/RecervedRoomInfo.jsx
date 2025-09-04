import React, { useState } from "react";

const ReservedRoomInfo = ({ onNavigate }) => {
  // Sample reserved room data
  const reservedRoomData = [
    {
      id: 1,
      guestName: "John Smith",
      mobile: "+94 77 123 4567",
      roomInfo: "D01/Deluxe room",
      package: "All-Inclusive",
      checkIn: "2025-08-30 14:00",
      checkOut: "2025-09-02 11:00",
      availability: "Reserved"
    },
    {
      id: 2,
      guestName: "Emily Johnson",
      mobile: "+94 71 987 6543",
      roomInfo: "S02/Single room",
      package: "Full board",
      checkIn: "2025-08-29 15:30",
      checkOut: "2025-08-31 12:00",
      availability: "Reserved"
    },
    {
      id: 3,
      guestName: "Michael Brown",
      mobile: "+94 76 555 1234",
      roomInfo: "P02/Presidential Suite",
      package: "All-Inclusive",
      checkIn: "2025-08-28 16:00",
      checkOut: "2025-09-01 10:00",
      availability: "Reserved"
    },
    {
      id: 4,
      guestName: "Sarah Wilson",
      mobile: "+94 75 444 9876",
      roomInfo: "D03/Double room",
      package: "Half board",
      checkIn: "2025-08-30 13:00",
      checkOut: "2025-09-03 11:30",
      availability: "Reserved"
    },
    {
      id: 5,
      guestName: "David Lee",
      mobile: "+94 78 111 2222",
      roomInfo: "DX02/Deluxe room",
      package: "Full board",
      checkIn: "2025-08-29 14:30",
      checkOut: "2025-08-31 10:30",
      availability: "Reserved"
    }
  ];

  const handleBackToAvailability = () => {
    if (onNavigate) {
      onNavigate("room-availability");
    }
  };

  const handleBackToReservation = () => {
    if (onNavigate) {
      onNavigate("reservation-management");
    }
  };

  return (
    <div style={{ padding: "32px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header with Back Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <button
            onClick={handleBackToReservation}
            style={backButtonStyle}
          >
            ← Reservation Management
          </button>
          <button
            onClick={handleBackToAvailability}
            style={{
              ...backButtonStyle,
              backgroundColor: "#f0f9ff",
              color: "#3b82f6",
              borderColor: "#3b82f6"
            }}
          >
            🏨 Room Availability
          </button>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", margin: "0" }}>
            Reserved Room Information
          </h1>
        </div>

        {/* Statistics Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "32px"
        }}>
          <div style={statCardStyle}>
            <h3 style={statCardTitleStyle}>Total Reservations</h3>
            <span style={statCardValueStyle}>{reservedRoomData.length}</span>
          </div>
          <div style={statCardStyle}>
            <h3 style={statCardTitleStyle}>Check-ins Today</h3>
            <span style={{...statCardValueStyle, color: "#22c55e"}}>3</span>
          </div>
          <div style={statCardStyle}>
            <h3 style={statCardTitleStyle}>Check-outs Today</h3>
            <span style={{...statCardValueStyle, color: "#ef4444"}}>2</span>
          </div>
          <div style={statCardStyle}>
            <h3 style={statCardTitleStyle}>Occupancy Rate</h3>
            <span style={{...statCardValueStyle, color: "#8b5cf6"}}>75%</span>
          </div>
        </div>

        {/* Reserved Rooms Table */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05)",
          border: "1px solid #e2e8f0",
          overflow: "hidden"
        }}>
          <div style={{
            padding: "24px",
            borderBottom: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc"
          }}>
            <h2 style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1e293b",
              margin: "0"
            }}>
              Current Reservations
            </h2>
          </div>
          
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f1f5f9" }}>
                  <th style={tableHeaderStyle}>Guest Name</th>
                  <th style={tableHeaderStyle}>Mobile Number</th>
                  <th style={tableHeaderStyle}>Room ID + Type</th>
                  <th style={tableHeaderStyle}>Reservation Package</th>
                  <th style={tableHeaderStyle}>Check-in Date & Time</th>
                  <th style={tableHeaderStyle}>Check-out Date & Time</th>
                  <th style={tableHeaderStyle}>Availability</th>
                </tr>
              </thead>
              <tbody>
                {reservedRoomData.map((reservation, index) => (
                  <tr 
                    key={reservation.id} 
                    style={{
                      borderBottom: index < reservedRoomData.length - 1 ? "1px solid #e2e8f0" : "none",
                      transition: "background-color 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.target.closest('tr').style.backgroundColor = "#f8fafc"}
                    onMouseLeave={(e) => e.target.closest('tr').style.backgroundColor = "transparent"}
                  >
                    <td style={tableCellStyle}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: "#3b82f6",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: "500"
                        }}>
                          {reservation.guestName.charAt(0)}
                        </div>
                        <span style={{ fontWeight: "500" }}>{reservation.guestName}</span>
                      </div>
                    </td>
                    <td style={tableCellStyle}>{reservation.mobile}</td>
                    <td style={tableCellStyle}>
                      <span style={{ fontWeight: "500", color: "#3b82f6" }}>
                        {reservation.roomInfo}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <span style={{
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        backgroundColor: reservation.package === "All-Inclusive" ? "#fef3c7" : 
                                       reservation.package === "Full board" ? "#dbeafe" : "#f3e8ff",
                        color: reservation.package === "All-Inclusive" ? "#92400e" : 
                               reservation.package === "Full board" ? "#1e40af" : "#7c3aed"
                      }}>
                        {reservation.package}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>
                          {reservation.checkIn.split(' ')[0]}
                        </span>
                        <span style={{ fontSize: "12px", color: "#6b7280" }}>
                          {reservation.checkIn.split(' ')[1]}
                        </span>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>
                          {reservation.checkOut.split(' ')[0]}
                        </span>
                        <span style={{ fontSize: "12px", color: "#6b7280" }}>
                          {reservation.checkOut.split(' ')[1]}
                        </span>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <span style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "500",
                        backgroundColor: "#fee2e2",
                        color: "#dc2626"
                      }}>
                        {reservation.availability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "24px"
        }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={secondaryButtonStyle}>
              📊 Export Report
            </button>
            <button style={secondaryButtonStyle}>
              📧 Send Notifications
            </button>
          </div>
          <button 
            onClick={handleBackToAvailability}
            style={primaryButtonStyle}
          >
            ← Back to Room Availability
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const backButtonStyle = {
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
  gap: "4px"
};

const statCardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  textAlign: "center",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
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
  color: "#1e293b"
};

const tableHeaderStyle = {
  padding: "16px",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "600",
  color: "#374151",
  borderBottom: "1px solid #e2e8f0"
};

const tableCellStyle = {
  padding: "16px",
  fontSize: "14px",
  color: "#1f2937",
  verticalAlign: "top"
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
  transition: "all 0.2s ease"
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

export default ReservedRoomInfo;