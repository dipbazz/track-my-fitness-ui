import { useEffect } from 'react';
import PropTypes from 'prop-types';
import MeasurementForm from './MeasurementForm';

const Measurement = ({
  status, error, exercises, getExercise,
}) => {
  useEffect(() => {
    getExercise();
    console.log(status, error, exercises);
  }, []);

  return (
    <>
      <h1>Measurement!!</h1>
      {exercises.map((exercise) => <MeasurementForm key={exercise.id} exercise={exercise} />)}
    </>
  );
};

Measurement.defaultProps = {
  error: {},
};

Measurement.propTypes = {
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.object),
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExercise: PropTypes.func.isRequired,
};

export default Measurement;
