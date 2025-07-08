import { NavLink } from 'react-router';
import './Sidebar.css';

const menu = [
  { name: 'Patients', path: '/patients', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.5 3.6-4 8-4s8 1.5 8 4"/></svg>
  ) },
  { name: 'Overview', path: '/overview', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
  ) },
  { name: 'Map', path: '/map', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 20l-5 2V6l5-2m0 16V4m0 16l6-2m-6-14l6 2m0 0l5-2v16l-5 2m0-16v16"/></svg>
  ) },
  { name: 'Departments', path: '/departments', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
  ) },
  { name: 'Doctors', path: '/doctors', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.5 3.6-4 8-4s8 1.5 8 4"/></svg>
  ) },
  { name: 'History', path: '/history', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ) },
  { name: 'Settings', path: '/settings', icon: (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ) },
];

const Sidebar = () => {
  return (
    <div className="sidebar-root">
      <div className="sidebar-header">
        <span className="sidebar-logo">+</span> H-care
      </div>
      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              'sidebar-link' + (isActive ? ' active' : '')
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
