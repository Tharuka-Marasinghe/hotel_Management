// Admin Routes
import AdminDashboard from './pages/admin/dashboard';
import AdminUsers from './pages/admin/users';
import AdminSettings from './pages/admin/settings';
import AdminNotifications from './pages/admin/notifications';
import AdminAddUser from './pages/admin/addUser';

// Reservation Routes
import ReservationDashboard from './pages/resevation/Dashboard';

export const routes = [
  {
    path: '/dashboard',
    element: <AdminDashboard />
  },
  {
    path: '/dashboard/users',
    element: <AdminUsers />
  },
  {
    path: '/dashboard/settings',
    element: <AdminSettings />
  },
  {
    path: '/dashboard/notifications',
    element: <AdminNotifications />
  },
  {
    path: '/dashboard/addUser',
    element: <AdminAddUser />
  },
  {
    path: '/reservation',
    element: <ReservationDashboard />
  }
];
