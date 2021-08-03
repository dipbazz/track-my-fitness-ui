import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateProgress } from '../utils/helper';

const MeasurementItem = ({ date, measurements }) => {
  const exercises = useSelector((state) => state.exercise.exercises);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(calculateProgress(measurements, exercises));
  }, [measurements, exercises]);

  return (
    <>
      <Link to={`/measurement/detail/${date}`} className="flex justify-between p-4 shadow my-4">
        <div>
          <Chart
            width="60px"
            height="60px"
            chartType="PieChart"
            loader={<div className="loader">Loading...</div>}
            data={[['Pac Man', 'Percentage'], ['', progress], ['', 100 - progress]]}
            options={{
              legend: 'none',
              pieSliceText: 'none',
              pieHole: 0.8,
              pieStartAngle: 0,
              tooltip: { trigger: 'none' },
              slices: {
                0: { color: progress > 50 ? '#69f018' : 'red' },
                1: { color: '#eaeef1' },
              },
            }}
          />
        </div>
        <span>{moment(date).format('dddd, MMMM Do YYYY')}</span>
        <span>
          {progress}
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
