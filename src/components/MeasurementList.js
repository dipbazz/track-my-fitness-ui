import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { STATUS } from '../redux/actions/actionTypes';
import FormError from './layouts/FormError';
import Heading from './layouts/Heading';
import Loading from './layouts/Loading';
import MeasurementItem from './MeasurementItem';

const MeasurementList = ({
  status, error, measurements, getMeasurements, getExercises,
}) => {
  useEffect(() => {
    getExercises();
    getMeasurements();
  }, []);

  if (status === STATUS.loading) {
    return (
      <>
        <Heading title="Add your measurements" />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Heading title="Measurement list" />
      {status === STATUS.error && <FormError errors={error} /> }
      <div>
        {measurements.map((measurement) => (
          <MeasurementItem
            key={measurement.date}
            date={measurement.date}
            measurements={measurement.data}
          />
        ))}
      </div>
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
