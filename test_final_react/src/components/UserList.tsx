import React from 'react';
import { useUserContext } from './UserProvider';
import { Link } from 'react-router';

const UserList: React.FC = () => {
  const { users } = useUserContext();

  if (users.length === 0) return <div>No users.</div>;

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age !== undefined ? user.age : 'N/A'}</td>
            <td><Link to={`/users/${user.id}`}>View</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
