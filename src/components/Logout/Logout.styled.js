import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledLogout = styled.button`
  display: inline-block;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(46, 47, 66, 0.1);
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 2px;
  &:hover {
    opacity: 1;
  }
`;
