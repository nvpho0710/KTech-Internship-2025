import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllRoles, assignRolesToUser } from '../services/rolesUsers';

interface User {
  id: number;
  email: string;
  roles?: string[];
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<{ [userId: number]: string[] }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [usersData, rolesData] = await Promise.all([
        getAllUsers(),
        getAllRoles(),
      ]);
      setUsers(usersData);
      setRoles(rolesData);
      // Khởi tạo selectedRoles cho từng user
      const initial: { [userId: number]: string[] } = {};
      usersData.forEach((u: User) => {
        initial[u.id] = u.roles || [];
      });
      setSelectedRoles(initial);
    } catch {
      setError('Failed to fetch users or roles');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRoleChange = (userId: number, role: string) => {
    setSelectedRoles(prev => {
      const hasRole = prev[userId]?.includes(role);
      return {
        ...prev,
        [userId]: hasRole
          ? prev[userId].filter(r => r !== role)
          : [...(prev[userId] || []), role],
      };
    });
  };

  const handleAssignRoles = async (userId: number) => {
    try {
      await assignRolesToUser(userId, selectedRoles[userId] || []);
      fetchData();
    } catch {
      setError('Failed to assign roles');
    }
  };

  return (
    <div>
      <h1>Users Management</h1>
      {loading ? <div>Loading...</div> : null}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Roles</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>
                {roles.map(role => (
                  <label key={role} style={{ marginRight: 8 }}>
                    <input
                      type="checkbox"
                      checked={selectedRoles[user.id]?.includes(role) || false}
                      onChange={() => handleRoleChange(user.id, role)}
                    />
                    {role}
                  </label>
                ))}
              </td>
              <td>
                <button onClick={() => handleAssignRoles(user.id)}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
