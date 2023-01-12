import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
