import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
   const { isLoggedIn } = useAuth();
   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
 };