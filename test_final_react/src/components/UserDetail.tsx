import React from 'react';
import { useParams } from 'react-router';
import { useUserContext } from './UserProvider';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { users } = useUserContext();
  const user = users.find(u => u.id === id);

  if (!user) return <div className="error-text" style={{ textAlign: 'center' }}>User not found</div>;

  return (
    <div className="user-container">
      <h3>User Detail</h3>
      <div><b>Name:</b> {user.name}</div>
      <div><b>Email:</b> {user.email}</div>
      <div><b>Age:</b> {user.age !== undefined ? user.age : 'N/A'}</div>
    </div>
  );
};

export default UserDetail;
