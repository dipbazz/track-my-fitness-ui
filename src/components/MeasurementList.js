import PropTypes from 'prop-types';
import { useEffect } from 'react';
import MeasurementItem from './MeasurementItem';

const MeasurementList = ({
  status, error, measurements, getMeasurements,
}) => {
  // const [items, setItems] = useEffect();
  useEffect(() => {
    console.log(status, error);
    getMeasurements();
  }, []);

  const prepareData = (measurements) => {
    const items = {};
    measurements.forEach((measurement) => {
      const key = measurement.created_at.split('T')[0];
      const value = items[key];
      if (value) {
        value.push(measurement);
      } else {
        items[key] = [measurement];
      }
    });

    return items;
  };

  return (
    <>
      <h1>Measurement list!!</h1>
      {Object.entries(prepareData(measurements)).map(([key, value]) => (
        <MeasurementItem
          key={key}
          measurements={value}
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
};

export default MeasurementList;
