import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MeasurementForm from './MeasurementForm';
import { measurement } from '../utils/api';

const Measurement = ({
  status, error, exercises, getExercise,
}) => {
  const [measurements, setMeasurements] = useState({});
  useEffect(() => {
    getExercise();
    console.log(status, error, exercises);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const requests = Object.keys(measurements).map((key) => measurement.post({
      measurement: {
        exercise_id: key,
        quantity: measurements[key],
      },
    }));
    axios
      .all(requests)
      .then(() => setMeasurements({}))
      .catch((errors) => console.log(errors));
  };

  const measurementChange = ({ target: { name, value } }) => {
    setMeasurements({
      ...measurements,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Measurement!!</h1>
      <form onSubmit={submitForm}>
        {exercises.map((exercise) => (
          <MeasurementForm
            key={exercise.id}
            measurementChange={measurementChange}
            measurements={measurements}
            exercise={exercise}
          />
        ))}
        <button className="border border-gray-500" type="submit">Save</button>
      </form>
    </>
  );
};

Measurement.defaultProps = {
  error: {},
};

Measurement.propTypes = {
  status: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExercise: PropTypes.func.isRequired,
};

export default Measurement;
