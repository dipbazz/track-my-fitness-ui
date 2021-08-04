import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { calculateProgress } from '../utils/helper';
import ExerciseCard from './layouts/ExerciseCard';
import Heading from './layouts/Heading';

const MeasurementDetail = ({ measurement, exercises }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(calculateProgress(measurement.data, exercises));
  }, [measurement, exercises]);

  const findMeasurement = (exerciseId) => (
    measurement.data.find((item) => item.exercise_id === exerciseId)
  );

  return (
    <>
      <Heading title={`Detail of ${moment(measurement.date).format('dddd, MMMM Do YYYY')}`} />
      <div className="bg-white flex flex-col p-5 mb-3 items-center">
        <p>
          <span>Target Achieved: </span>
          <span className="font-semibold">
            {progress}
            %
          </span>
        </p>
        <Chart
          width="180px"
          height="180px"
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

      <div className="grid grid-cols-2 gap-5 mt-6">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            measurement={findMeasurement(exercise.id)}
          />
        ))}
      </div>
    </>
  );
};

MeasurementDetail.propTypes = {
  measurement: PropTypes.objectOf(PropTypes.any).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeasurementDetail;
