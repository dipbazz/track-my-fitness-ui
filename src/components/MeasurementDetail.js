import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { calculateProgress } from '../utils/helper';

const MeasurementDetail = ({ measurement, exercises }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const rate = calculateProgress(measurement.data, exercises);
    setProgress(rate >= 100 ? 100 : rate);
  }, [measurement, exercises]);

  const chartRate = progress;
  return (
    <>
      <span>{measurement.date}</span>
      <span>{chartRate}</span>
      <Chart
        width="180px"
        height="180px"
        chartType="PieChart"
        loader={<div className="loader">Loading...</div>}
        data={[['Pac Man', 'Percentage'], ['', progress], ['', 52.00]]}
        options={{
          legend: 'none',
          pieSliceText: 'none',
          pieHole: 0.8,
          pieStartAngle: 0,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: '#41b5e8' },
            1: { color: '#eaeef1' },
          },
        }}
      />
    </>
  );
};

MeasurementDetail.propTypes = {
  measurement: PropTypes.objectOf(PropTypes.any).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeasurementDetail;
