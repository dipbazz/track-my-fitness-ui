import PropTypes from 'prop-types';
import { useEffect } from 'react';
import MeasurementItem from './MeasurementItem';

const MeasurementList = ({
  status, error, measurements, getMeasurements, getExercises,
}) => {
  // const [items, setItems] = useEffect();
  useEffect(() => {
    console.log(status, error);
    getExercises();
    getMeasurements();
  }, []);

  return (
    <>
      <h1>Measurement list!!</h1>
      {measurements.map((measurement) => (
        <MeasurementItem
          key={measurement.date}
          date={measurement.date}
          measurements={measurement.data}
        />
      ))}
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
  getMeasurements: PropTypes.func.isRequired,
  getExercises: PropTypes.func.isRequired,
};

export default MeasurementList;
