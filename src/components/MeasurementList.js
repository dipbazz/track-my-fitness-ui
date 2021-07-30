import PropTypes from 'prop-types';
import { useEffect } from 'react';

const MeasurementList = ({
  status, error, measurements, getMeasurement,
}) => {
  useEffect(() => {
    getMeasurement();
    console.log(status, error, measurements);
  }, []);

  return (
    <>
      <h1>Measurement list!!</h1>
    </>
  );
};

MeasurementList.defaultProps = {
  error: {},
};

MeasurementList.propTypes = {
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurement: PropTypes.func.isRequired,
};

export default MeasurementList;
