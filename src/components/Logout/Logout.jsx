import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { selectUser } from 'redux/selectors';

export const LogOut = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(logOutUser());
  };
  return (
    <div>
      <p>Hi, {name}</p>
      <button type="button" onClick={handlerClick}>
        LogOut
      </button>
    </div>
  );
};
