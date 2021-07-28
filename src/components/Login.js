import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { STATUS } from '../redux/actions/actionTypes';
import Error from './layouts/Error';

const Login = ({ login, status, error }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    login(email.value, password.value);
  };

  useEffect(() => {
    if (status === STATUS.success) {
      history.push('/');
    }
  }, [status]);

  return (
    <div>
      <h1>Login!!</h1>
      {status === STATUS.error ? <Error errors={error} /> : ''}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <input type="password" name="password" placeholder="********" />
        <button type="submit" disabled={status === STATUS.loading}>
          { status === STATUS.loading ? 'Logging in ...' : 'Login'}
        </button>
      </form>
      <Link to="/register">Register </Link>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.shape({
    message: PropTypes.string,
  })).isRequired,
};

export default Login;
