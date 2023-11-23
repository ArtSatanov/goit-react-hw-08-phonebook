import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { StyledDiv, StyledLogout } from './Logout.styled';

export const LogOut = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(logOutUser());
  };
  return (
    <StyledDiv>
      <p>Hi, {email}</p>
      <StyledLogout type="button" onClick={handlerClick}>
        LogOut
      </StyledLogout>
    </StyledDiv>
  );
};
