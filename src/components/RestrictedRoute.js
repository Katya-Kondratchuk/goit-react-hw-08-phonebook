import { useAuth } from '../hook/useAuth';
import { Navigate } from 'react-router-dom';
// import { selectIsRefreshing } from 'redux/auth/selectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
