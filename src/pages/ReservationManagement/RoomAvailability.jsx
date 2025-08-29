import React, { useState } from "react";

const RoomAvailability = ({ onNavigate }) => {
  const [filterRoomType, setFilterRoomType] = useState("all");

  // Sample room data
  const roomData = [
    { id: "S01", type: "Single room", package: "Half board", availability: "Available" },
    { id: "S02", type: "Single room", package: "Full board", availability: "Reserved" },
    { id: "S03", type: "Single room", package: "All-Inclusive", availability: "Available" },
    { id: "D01", type: "Double room", package: "Full board", availability: "Reserved" },
    { id: "D02", type: "Double room", package: "Half board", availability: "Available" },
    { id: "D03", type: "Double room", package: "All-Inclusive", availability: "Reserved" },
    { id: "DX01", type: "Deluxe room", package: "All-Inclusive", availability: "Available" },
    { id: "DX02", type: "Deluxe room", package: "Full board", availability: "Reserved" },
    { id: "P01", type: "Presidential Suite", package: "All-Inclusive", availability: "Available" },
    { id: "P02", type: "Presidential Suite", package: "All-Inclusive", availability: "Reserved" },
  ];

  // Filter rooms based on selected room type
  const filteredRooms = filterRoomType === "all" 
    ? roomData 
    : roomData.filter(room => room.type === filterRoomType);

  const handleGoToReserved = () => {
    if (onNavigate) {
      onNavigate("reserved-room-info");
    }
  };

  const handleBackToDashboard = () => {
    if (onNavigate) {
      onNavigate("reservation-management");
    }
  };

  return (
    <div style={{ padding: "32px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header with Back Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <button
            onClick={handleBackToDashboard}
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
              gap: "4px"
            }}
          >
            ← Back
          </button>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", margin: "0" }}>
            Room Availability
          </h1>
        </div>

        {/* Filter Dropdown */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#374151", 
            marginRight: "12px" 
          }}>
            Filter by Room Type:
          </label>
          <select
            value={filterRoomType}
            onChange={(e) => setFilterRoomType(e.target.value)}
            style={{
              padding: "12px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "white",
              cursor: "pointer",
              minWidth: "200px"
            }}
          >
            <option value="all">All Room Types</option>
            <option value="Single room">Single Room</option>
            <option value="Double room">Double Room</option>
            <option value="Deluxe room">Deluxe Room</option>
            <option value="Presidential Suite">Presidential Suite</option>
          </select>
        </div>

        {/* Room Availability Table */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05)",
          border: "1px solid #e2e8f0",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <th style={tableHeaderStyle}>Room ID</th>
                <th style={tableHeaderStyle}>Room Type</th>
                <th style={tableHeaderStyle}>Reservation Package</th>
                <th style={tableHeaderStyle}>Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((room, index) => (
                <tr 
                  key={room.id} 
                  style={{
                    borderBottom: index < filteredRooms.length - 1 ? "1px solid #e2e8f0" : "none",
                    transition: "background-color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.target.closest('tr').style.backgroundColor = "#f8fafc"}
                  onMouseLeave={(e) => e.target.closest('tr').style.backgroundColor = "transparent"}
                >
                  <td style={tableCellStyle}>{room.id}</td>
                  <td style={tableCellStyle}>{room.type}</td>
                  <td style={tableCellStyle}>
                    <span style={{
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      backgroundColor: room.package === "All-Inclusive" ? "#fef3c7" : 
                                     room.package === "Full board" ? "#dbeafe" : "#f3e8ff",
                      color: room.package === "All-Inclusive" ? "#92400e" : 
                             room.package === "Full board" ? "#1e40af" : "#7c3aed"
                    }}>
                      {room.package}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                      backgroundColor: room.availability === "Available" ? "#dcfce7" : "#fee2e2",
                      color: room.availability === "Available" ? "#166534" : "#dc2626"
                    }}>
                      {room.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Button */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button
            onClick={handleGoToReserved}
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px rgba(59,130,246,0.2)"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#2563eb"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#3b82f6"}
          >
            View Reserved Room Information →
          </button>
        </div>
      </div>
    </div>
  );
};

// Table Styles
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
  color: "#1f2937"
};

export default RoomAvailability;