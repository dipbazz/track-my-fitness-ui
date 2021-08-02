import PropTypes from 'prop-types';

const MeasurementDetail = ({ measurement }) => (
  <>
    <span>{measurement.date}</span>
  </>
);

MeasurementDetail.propTypes = {
  measurement: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MeasurementDetail;
