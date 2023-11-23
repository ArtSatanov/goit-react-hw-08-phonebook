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
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    color: #353599;
  }

  &.active {
    color: #353599;
  }
`;
