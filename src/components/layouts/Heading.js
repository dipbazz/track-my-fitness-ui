import PropTypes from 'prop-types';

const Heading = ({ title }) => (
  <h1 className="bg-azure-900 mb-5 text-white p-5 text-xl font-light">
    {title}
  </h1>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
