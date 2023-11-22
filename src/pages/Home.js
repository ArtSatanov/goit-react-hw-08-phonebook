import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import { useAuth } from 'redux/selectors';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const token = useSelector(selectToken);

  return (
    <div>
      {isLoggedIn && <Navigate to={'/phonebook'} />}
      {!token && <Navigate to={'/login'} />}
    </div>
  );
};
export default Home;
