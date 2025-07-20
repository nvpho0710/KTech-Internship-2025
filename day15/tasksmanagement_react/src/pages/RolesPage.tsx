import React, { useEffect, useState } from 'react';
import { getAllRoles, addRole } from '../services/rolesUsers';

const RolesPage: React.FC = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [newRole, setNewRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const data = await getAllRoles();
      setRoles(data);
    } catch {
      setError('Failed to fetch roles');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleAddRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRole.trim()) return;
    try {
      await addRole(newRole.trim());
      setNewRole('');
      fetchRoles();
    } catch {
      setError('Failed to add role');
    }
  };

  return (
    <div>
      <h1>Roles Management</h1>
      <form onSubmit={handleAddRole} style={{ marginBottom: 16 }}>
        <input
          value={newRole}
          onChange={e => setNewRole(e.target.value)}
          placeholder="New role name"
        />
        <button type="submit">Add Role</button>
      </form>
      {loading ? <div>Loading...</div> : null}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolesPage;
