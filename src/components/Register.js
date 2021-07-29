import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { STATUS } from '../redux/actions/actionTypes';
import InputError from './layouts/InputError';
import FormError from './layouts/FormError';

/* eslint-disable react/jsx-props-no-spreading */
const Register = ({
  registerUser, status, error, isAuthenticated,
}) => {
  const history = useHistory();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    registerUser(data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [status]);

  return (
    <div>
      <h1>Register!!</h1>
      {status === STATUS.error && <FormError errors={error} /> }

      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="email"
          {...register('email', {
            required: 'This field is required',
          })}
          placeholder="your email"
        />
        {errors.email && <InputError error={errors.email.message} />}
        <br />
        <input
          type="password"
          {...register('password', {
            required: 'This field is required',
          })}
          placeholder="password"
        />
        {errors.password && <InputError error={errors.password.message} />}
        <br />
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'This field is required',
            validate: (value) => value === watch('password') || "Password didn't match.",
          })}
          placeholder="confirm password"
        />
        {errors.confirmPassword && <InputError error={errors.confirmPassword.message} />}
        <br />
        <button type="submit" disabled={status === STATUS.loading}>
          Register
        </button>
      </form>
      <Link to="/login">login </Link>
    </div>
  );
};

Register.defaultProps = {
  error: {},
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.object),
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Register;
