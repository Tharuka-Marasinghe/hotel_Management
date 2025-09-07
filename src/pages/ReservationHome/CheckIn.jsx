import React, { useState } from "react";

const CheckIn = () => {
  const [step, setStep] = useState(1);

  // All form data in one state
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    email: "",
    roomNumber: "",
    idType: "",
    idNumber: "",
    contactNumber: "",
    roomType: "",
    checkInDate: "",
    stayDays: "",
    adults: "",
    children: "",
    notes: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if current step form is filled
  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.firstname &&
        formData.lastname &&
        formData.country &&
        formData.address &&
        formData.email
      );
    }
    if (step === 2) {
      return (
        formData.roomNumber &&
        formData.idType &&
        formData.idNumber &&
        formData.contactNumber
      );
    }
    if (step === 3) {
      return (
        formData.roomType &&
        formData.checkInDate &&
        formData.stayDays &&
        formData.adults &&
        formData.children
      );
    }
    return false;
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      country: "",
      address: "",
      email: "",
      roomNumber: "",
      idType: "",
      idNumber: "",
      contactNumber: "",
      roomType: "",
      checkInDate: "",
      stayDays: "",
      adults: "",
      children: "",
      notes: "",
    });
  };

  const handleSubmit = () => {
    // Here you connect to DB API instead of console.log
    console.log("Final Check-in Data:", formData);
    alert("Customer successfully checked in!");
  };

  // Progress bar width
  const progressWidth = (step / 3) * 100;

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      {/* Progress Bar */}
      <div
        style={{
          backgroundColor: "#f0eaeaff",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: `${progressWidth}%`,
            height: "8px",
            backgroundColor: "#4ae03dff",
          }}
        />
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div>
          <h2>Customer Information</h2>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button onClick={handleClear} style={clearButtonStyle}>
              Clear
            </button>
            <button
              disabled={!isStepValid()}
              onClick={() => setStep(2)}
              style={!isStepValid() ? disabledButtonStyle : nextButtonStyle}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Room & ID */}
      {step === 2 && (
        <div>
          <h2>Room & ID Details</h2>
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={formData.roomNumber}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select ID Type</option>
            <option value="National ID">National ID</option>
            <option value="Driving Licence">Driving Licence</option>
            <option value="Passport">Passport</option>
          </select>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            style={inputStyle}
          />
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button onClick={() => setStep(1)} style={backButtonStyle}>
              Back
            </button>
            <button
              disabled={!isStepValid()}
              onClick={() => setStep(3)}
              style={!isStepValid() ? disabledButtonStyle : nextButtonStyle}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Stay Details */}
      {step === 3 && (
        <div>
          <h2>Stay Details</h2>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Full Board">Full Board</option>
            <option value="Half Board">Half Board</option>
          </select>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="stayDays"
            placeholder="Number of Stay Days"
            value={formData.stayDays}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="adults"
            placeholder="Number of Adults"
            value={formData.adults}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="children"
            placeholder="Number of Children"
            value={formData.children}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="notes"
            placeholder="Special Notes"
            value={formData.notes}
            onChange={handleChange}
            style={inputStyle}
          />
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button onClick={() => setStep(2)} style={backButtonStyle}>
              Back
            </button>
            <button
              disabled={!isStepValid()}
              onClick={handleSubmit}
              style={!isStepValid() ? disabledButtonStyle : submitButtonStyle}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
};

const backButtonStyle = {
  backgroundColor: "#fb2424ff",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const clearButtonStyle = {
  backgroundColor: "#fb2424ff",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const nextButtonStyle = {
  backgroundColor: "#2c28f9ff",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const submitButtonStyle = {
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const disabledButtonStyle = {
  backgroundColor: "#868b92ff",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "not-allowed",
};

export default CheckIn;
