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
      {isLoggedIn && (
        <StyledHeader>
          <div>
            <Navigation />
          </div>
          <StyledDiv>
            <LogOut />
          </StyledDiv>
        </StyledHeader>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
