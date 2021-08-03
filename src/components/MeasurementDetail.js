import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { calculateProgress } from '../utils/helper';
import ExerciseCard from './layouts/ExerciseCard';

const MeasurementDetail = ({ measurement, exercises }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const rate = calculateProgress(measurement.data, exercises);
    setProgress(rate >= 100 ? 100 : rate);
  }, [measurement, exercises]);

  const findMeasurement = (exerciseId) => (
    measurement.data.find((item) => item.exercise_id === exerciseId)
  );

  return (
    <>
      <div>
        <span>{measurement.date}</span>
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
        <p>
          <span>Target Achieved: </span>
          <span>
            {progress}
            %
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2">
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
