import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import LoginPage from './pages/LoginPage';
import OurTasksPage from './pages/OurTasksPage';
import MyTasksPage from './pages/MyTasksPage';
import CreateTaskPage from './pages/CreateTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';
import PrivateRoute from './components/PrivateRoute';
import AccessDeniedPage from './pages/AccessDeniedPage';
import AuthContext from './context';
import type { User } from './types';

export default function TasksManagementGuidelines() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from localStorage if available
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    // Clear user from state and localStorage
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    // Optionally, redirect to login page or show a message
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="header-bar">
          <div className="header-left">
            <span className="header-logo">✅</span>
            <span className="header-title">Tasks Management</span>
          </div>
          <div className="header-right">
            {user && <span className="user-info">{user.email}</span>}
            <nav className="nav-list">
              <NavLink className="nav-item" to="/tasks">Our Tasks</NavLink>
              <NavLink className="nav-item" to="/assignee-me">My Tasks</NavLink>
              <NavLink className="nav-item" to="/create-task">Create Task</NavLink>
              {user && (
                <button className="btn btn-logout nav-item" onClick={handleLogout}>Logout</button>
              )}
            </nav>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Private */}
            <Route path="/tasks" element={<PrivateRoute><OurTasksPage /></PrivateRoute>} />
            <Route path="/assignee-me" element={<PrivateRoute><MyTasksPage /></PrivateRoute>} />
            <Route path="/create-task" element={<PrivateRoute><CreateTaskPage /></PrivateRoute>} />
            <Route path="/update-task/:id" element={<PrivateRoute><UpdateTaskPage /></PrivateRoute>} />
            <Route path="/*" element={<AccessDeniedPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}