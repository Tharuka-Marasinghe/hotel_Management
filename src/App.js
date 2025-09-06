import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import CompanySettings from './pages/CompanySettings';
import ReservationHome from './pages/ReservationHome/ReservationHome';
import CheckIn from "./pages/ReservationHome/CheckIn";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <TopBar />
          <main>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Company Settings */}
              <Route path="/company-settings" element={<CompanySettings />} />

              {/* Reservation Management */}
              <Route path="/reservation" element={<ReservationHome />} />
              
              {/* Check In Page - ADD THIS ROUTE */}
              <Route path="/checkin" element={<CheckIn />} />

              {/* Other placeholder pages */}
              <Route path="/user-management" element={<h2>User Management Coming Soon...</h2>} />
              <Route path="/content-management" element={<h2>Content Management Coming Soon...</h2>} />
              <Route path="/analytics" element={<h2>Analytics Coming Soon...</h2>} />
              <Route path="/security" element={<h2>Security Settings Coming Soon...</h2>} />
              <Route path="/notifications" element={<h2>Notifications Coming Soon...</h2>} />
              <Route path="/database" element={<h2>Database Management Coming Soon...</h2>} />
              <Route path="/billing" element={<h2>Billing & Payments Coming Soon...</h2>} />
              
              {/* Additional routes you might need later */}
              <Route path="/checkout" element={<h2>Checkout Page Coming Soon...</h2>} />
              <Route path="/edit-customer" element={<h2>Edit Customer Page Coming Soon...</h2>} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;