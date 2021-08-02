import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MeasurementDetail from './MeasurementDetail';

const MeasurementItem = ({ date, measurements }) => {
  const exercises = useSelector((state) => state.exercise.exercises);
  const calculateProgress = (measurements) => {
    const sum = measurements.reduce((result, item) => {
      const exercise = exercises.find((exercise) => exercise.id === item.exercise_id);
      return result + ((item.quantity / exercise.target) * 100);
    }, 0);

    console.log(measurements);

    return (sum / measurements.length).toFixed(2);
  };

  return (
    <>
      <Link to="/" className="flex justify-between p-3 shadow m-2">
        <span>chart</span>
        <span>{moment(date).format('dddd, MMMM Do YYYY')}</span>
        <span>{calculateProgress(measurements)}</span>
      </Link>
      {measurements.map((measurement) => (
        <MeasurementDetail key={measurement.id} measurement={measurement} />
      ))}
    </>
  );
};

MeasurementItem.propTypes = {
  date: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeasurementItem;
