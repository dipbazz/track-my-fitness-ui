import PropTypes from 'prop-types';

const InputError = ({ error }) => (
  <p style={{ color: 'red' }}>
    {error}
  </p>
);

InputError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InputError;
