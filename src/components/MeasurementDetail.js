import PropTypes from 'prop-types';

const MeasurementDetail = ({ measurement }) => (
  <>
    <span>{measurement.id}</span>
    <span>{measurement.quantity}</span>
  </>
);

MeasurementDetail.propTypes = {
  measurement: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MeasurementDetail;
