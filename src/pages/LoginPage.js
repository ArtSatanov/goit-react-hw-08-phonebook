import { LoginForm } from 'components/LogInForm/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <p>Create an account?</p>
      <Link to={'/register'}>Signup</Link>
    </div>
  );
};

export default LoginPage;
