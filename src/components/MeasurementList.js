import PropTypes from 'prop-types';
import { useEffect } from 'react';
import FormError from './layouts/FormError';
import Heading from './layouts/Heading';
import Loading from './layouts/Loading';
import MeasurementItem from './MeasurementItem';

const MeasurementList = ({
  isLoading, apiError, measurements, getMeasurements, getExercises,
}) => {
  useEffect(() => {
    getExercises();
    getMeasurements();
  }, []);

  if (isLoading) {
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
      {apiError && <FormError errors={apiError.errors} /> }
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
  apiError: {},
};

MeasurementList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.objectOf(PropTypes.any),
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurements: PropTypes.func.isRequired,
  getExercises: PropTypes.func.isRequired,
};

export default MeasurementList;
