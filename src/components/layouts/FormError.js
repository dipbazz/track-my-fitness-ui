import PropTypes from 'prop-types';

const FormError = ({ errors }) => (
  <p style={{ color: 'red' }}>
    {Object.keys(errors).map((key) => `${key}: ${errors[key]}`)}
  </p>
);

FormError.propTypes = {
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormError;
