import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { calculateProgress } from '../utils/helper';

const MeasurementItem = ({ date, measurements }) => {
  const exercises = useSelector((state) => state.exercises.data);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(calculateProgress(measurements, exercises));
  }, [measurements, exercises]);

  return (
    <>
      <Link to={`/measurement/detail/${date}`} className="flex justify-between items-center p-4 shadow my-4 bg-white">
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
        <p className="">
          <span className="hidden sm:inline-block mr-2">{moment(date).format('dddd, ')}</span>
          <span>{moment(date).format('MMMM Do YYYY')}</span>
        </p>
        <span className="flex items-center">
          {progress}
          %
          <FaChevronRight className="ml-3" />
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
