import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormError from './layouts/FormError';
import InputError from './layouts/InputError';
import Heading from './layouts/Heading';

/* eslint-disable react/jsx-props-no-spreading */
const Login = ({
  login, apiError, isAuthenticated, isLoading,
}) => {
  console.log(apiError);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Heading title="Login" />
      {apiError && <FormError errors={apiError.errors} /> }

      <div className="p-5 m-auto max-w-md text-center bg-white mt-4 rounded">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="email"
            name="email"
            className="border border-gray-400 px-3 py-2 rounded my-3 w-full"
            {...register('email', {
              required: 'This field is required',
            })}
            placeholder="your email"
          />
          {errors.email && <InputError error={errors.email.message} />}
          <input
            type="password"
            name="password"
            className="border border-gray-400 px-3 py-2 rounded my-3 w-full"
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
          <button className="bg-green-400 px-10 py-2 mb-4 text-white rounded font-semibold" type="submit" disabled={isLoading}>
            { isLoading ? 'Logging in ...' : 'Login'}
          </button>
        </form>
        <Link to="/register" className="text-blue-500 underline">Register </Link>
      </div>
    </div>
  );
};

Login.defaultProps = {
  apiError: {},
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.objectOf(PropTypes.any),
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Login;
