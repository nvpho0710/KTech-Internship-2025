import { useContext } from 'react';
import { Navigate } from 'react-router';
import AuthContext from '../context';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);
  if (!user || !user.access_token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
