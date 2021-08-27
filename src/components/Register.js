import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputError from './layouts/InputError';
import FormError from './layouts/FormError';
import Heading from './layouts/Heading';

/* eslint-disable react/jsx-props-no-spreading */
const Register = ({
  registerUser, isLoading, apiError, isAuthenticated, resetUser,
}) => {
  const history = useHistory();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    registerUser(data.email, data.password);
  };

  const resetUserState = () => {
    resetUser();
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Heading title="Register your account" />
      {apiError && <FormError errors={apiError.errors} /> }

      <div className="p-5 m-auto max-w-md text-center bg-white mt-4 rounded">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="email"
            className="border border-gray-400 px-3 py-2 rounded my-3 w-full"
            {...register('email', {
              required: 'This field is required',
            })}
            placeholder="your email"
          />
          {errors.email && <InputError error={errors.email.message} />}
          <input
            type="password"
            className="border border-gray-400 px-3 py-2 rounded my-3 w-full"
            {...register('password', {
              required: 'This field is required',
            })}
            placeholder="password"
          />
          {errors.password && <InputError error={errors.password.message} />}
          <input
            type="password"
            className="border border-gray-400 px-3 py-2 rounded my-3 w-full"
            {...register('confirmPassword', {
              required: 'This field is required',
              validate: (value) => value === watch('password') || "Password didn't match.",
            })}
            placeholder="confirm password"
          />
          {errors.confirmPassword && <InputError error={errors.confirmPassword.message} />}
          <button className="bg-green-400 px-10 py-2 mb-4 text-white rounded font-semibold" type="submit" disabled={isLoading}>
            Register
          </button>
        </form>
        <Link onClick={resetUserState} className="text-blue-500 underline" to="/login">login </Link>
      </div>
    </div>
  );
};

Register.defaultProps = {
  apiError: {},
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.objectOf(PropTypes.object),
  isAuthenticated: PropTypes.bool.isRequired,
  resetUser: PropTypes.func.isRequired,
};

export default Register;
