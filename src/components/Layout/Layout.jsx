import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { LogOut } from 'components/Logout/Logout';
import { useAuth } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { StyledHeader, StyledDiv } from './Layout.styled';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <StyledHeader>
        <div>{isLoggedIn && <Navigation />}</div>
        <StyledDiv>{isLoggedIn && <LogOut />}</StyledDiv>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
