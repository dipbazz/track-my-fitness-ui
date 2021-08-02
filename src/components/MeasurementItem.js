import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MeasurementItem = ({ date, measurements }) => {
  const exercises = useSelector((state) => state.exercise.exercises);
  const calculateProgress = (measurements) => {
    const sum = measurements.reduce((result, item) => {
      const exercise = exercises.find((exercise) => exercise.id === item.exercise_id);
      return result + ((item.quantity / exercise.target) * 100);
    }, 0);
    return (sum / measurements.length).toFixed(2);
  };

  return (
    <>
      <Link to={`/measurement/detail/${date}`} className="flex justify-between p-4 shadow my-4">
        <span>chart</span>
        <span>{moment(date).format('dddd, MMMM Do YYYY')}</span>
        <span>
          {calculateProgress(measurements)}
          %
        </span>
      </Link>
    </>
  );
};

MeasurementItem.propTypes = {
  date: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeasurementItem;
