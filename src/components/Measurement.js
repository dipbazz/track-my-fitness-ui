import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MeasurementForm from './MeasurementForm';
import { measurement } from '../utils/api';
import Heading from './layouts/Heading';

const Measurement = ({
  status, error, exercises, getExercise,
}) => {
  const [measurements, setMeasurements] = useState({});
  const history = useHistory();
  useEffect(() => {
    getExercise();
    console.log(status, error);
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
      .then(() => {
        setMeasurements({});
        history.push('/measurement/list');
      })
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
      <Heading title="Add your measurements" />
      <form onSubmit={submitForm}>
        {exercises.map((exercise) => (
          <MeasurementForm
            key={exercise.id}
            measurementChange={measurementChange}
            measurements={measurements}
            exercise={exercise}
          />
        ))}
        <div className="text-center">
          <button className="w-52 mt-4 py-2 shadow-sm rounded bg-green-400 text-white font-bold text-xl" type="submit">
            Save
          </button>
        </div>
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
