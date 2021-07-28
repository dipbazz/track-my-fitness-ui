import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { STATUS } from '../redux/actions/actionTypes';
import Error from './layouts/Error';

const Register = ({
  register, status, error, isAuthenticated,
}) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    register(email.value, password.value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [status]);

  return (
    <div>
      <h1>Register!!</h1>
      {status === STATUS.error ? <Error errors={error} /> : ''}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <input type="password" name="password" placeholder="password" />
        <input type="password" name="confirmPassword" placeholder="confirm password" />
        <button type="submit" disabled={status === STATUS.loading}>
          Register
        </button>
      </form>
      <Link to="/login">login </Link>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.shape({
    message: PropTypes.string,
  })).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Register;
