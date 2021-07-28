import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { STATUS } from '../redux/actions/actionTypes';

const Login = ({ loginUserAsync, auth }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    loginUserAsync(email.value, password.value);
  };

  useEffect(() => {
    if (auth.status === STATUS.success) {
      history.push('/');
    }
  }, [auth]);

  const renderError = (error) => (
    <p style={{ color: 'red' }}>
      {error.message}
    </p>
  );

  return (
    <div>
      <h1>Login!!</h1>
      {auth.status === STATUS.error ? renderError(auth.error) : ''}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <input type="password" name="password" placeholder="********" />
        <button type="submit" disabled={auth.status === STATUS.loading}>
          { auth.status === STATUS.loading ? 'Logging in ...' : 'Login'}
        </button>
      </form>
      <Link to="/register">Register </Link>
    </div>
  );
};

Login.propTypes = {
  loginUserAsync: PropTypes.func.isRequired,
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Login;
