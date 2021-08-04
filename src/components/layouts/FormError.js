import PropTypes from 'prop-types';

const FormError = ({ errors }) => (
  <p className="text-red-500 p-3 text-center mt-4">
    {Object.keys(errors).map((key) => `${key} ${errors[key]}`)}
  </p>
);

FormError.propTypes = {
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormError;
