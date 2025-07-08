import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Sidebar from './components/Sidebar';
import './App.css';

import PatientsPage from './pages/PatientsPage';
import OverviewPage from './pages/OverviewPage';
import MapPage from './pages/MapPage';
import DepartmentsPage from './pages/DepartmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <div className="app-root">
        <Sidebar />
        <div className="app-content">
          <div className="app-header">
            <input type="text" placeholder="Search..." className="app-search" />
            <span className="app-bell">&#128276;</span>
            <span className="app-avatar"></span>
            <span className="app-username">Emma Kwan</span>
          </div>
          <div className="app-page">
            <Routes>
              <Route path="/patients" element={<PatientsPage />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/patients" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
