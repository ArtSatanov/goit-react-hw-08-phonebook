import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { LogOut } from 'components/Logout/Logout';

export const Layout = () => {
  return (
    <div>
      <header>
        <LogOut />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
