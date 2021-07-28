import PropTypes from 'prop-types';

const Error = ({ errors }) => (
  <p style={{ color: 'red' }}>
    {Object.keys(errors).map((key) => `${key}: ${errors[key]}`)}
  </p>
);

Error.propTypes = {
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Error;
