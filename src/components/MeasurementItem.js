import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateProgress } from '../utils/helper';

const MeasurementItem = ({ date, measurements }) => {
  const exercises = useSelector((state) => state.exercise.exercises);

  return (
    <>
      <Link to={`/measurement/detail/${date}`} className="flex justify-between p-4 shadow my-4">
        <span>chart</span>
        <span>{moment(date).format('dddd, MMMM Do YYYY')}</span>
        <span>
          {calculateProgress(measurements, exercises)}
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
