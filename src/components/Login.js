import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { STATUS } from '../redux/actions/actionTypes';
import FormError from './layouts/FormError';
import InputError from './layouts/InputError';

/* eslint-disable react/jsx-props-no-spreading */
const Login = ({
  login, status, error, isAuthenticated,
}) => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [status]);

  return (
    <div>
      <h1>Login!!</h1>
      {status === STATUS.error && <FormError errors={error} /> }

      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="email"
          name="email"
          {...register('email', {
            required: 'This field is required',
          })}
          placeholder="your email"
        />
        {errors.email && <InputError error={errors.email.message} />}
        <br />
        <input
          type="password"
          name="password"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 character long.',
            },
          })}
          placeholder="********"
        />
        {errors.password && <InputError error={errors.password.message} />}
        <br />
        <button type="submit" disabled={status === STATUS.loading}>
          { status === STATUS.loading ? 'Logging in ...' : 'Login'}
        </button>
      </form>
      <Link to="/register">Register </Link>
    </div>
  );
};

Login.defaultProps = {
  error: {},
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Login;
