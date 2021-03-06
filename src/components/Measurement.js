import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MeasurementForm from './MeasurementForm';
import { measurement } from '../utils/api';
import Heading from './layouts/Heading';
import FormError from './layouts/FormError';
import Loading from './layouts/Loading';

const Measurement = ({
  isLoading, apiError, exercises, getExercise,
}) => {
  const [measurements, setMeasurements] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (exercises.length === 0) {
      getExercise();
    }
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
      });
  };

  const measurementChange = ({ target: { name, value } }) => {
    setMeasurements({
      ...measurements,
      [name]: value,
    });
  };

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
      <Heading title="Add your measurements" />
      {apiError && <FormError errors={apiError.errors} /> }
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
  apiError: {},
};

Measurement.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.objectOf(PropTypes.any),
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExercise: PropTypes.func.isRequired,
};

export default Measurement;
