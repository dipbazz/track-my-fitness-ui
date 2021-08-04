import PropTypes from 'prop-types';

const InputError = ({ error }) => (
  <p className="text-red-500 mb-3 text-left">
    {error}
  </p>
);

InputError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InputError;
