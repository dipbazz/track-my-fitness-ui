import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ loginUserAsync }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const data = {
      email: email.value,
      password: password.value,
    };
    loginUserAsync(data);
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
