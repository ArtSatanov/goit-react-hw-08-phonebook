import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { LogOut } from 'components/Logout/Logout';
import { useAuth } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        {isLoggedIn && <Navigation />}
        {isLoggedIn && <LogOut />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
