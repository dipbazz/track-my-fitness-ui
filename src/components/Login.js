import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ loginUserAsync }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    loginUserAsync(email.value, password.value);
    history.push('/');
  };

  return (
    <div>
      <h1>Login!!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <input type="password" name="password" placeholder="********" />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register </Link>
    </div>
  );
};

Login.propTypes = {
  loginUserAsync: PropTypes.func.isRequired,
};

export default Login;
