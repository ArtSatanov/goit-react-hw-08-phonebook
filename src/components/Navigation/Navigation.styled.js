import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
display: inline-block;
min-width: 50px;
min-hieght: 100%
text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #353599;
  }

  &.active {
    color: #353599;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;
