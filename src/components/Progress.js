import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

const Progress = ({
  monthlyProgress, thisWeek, lastWeek, twoWeek, threeWeek,
}) => (
  <div>
    <div className="relative flex justify-center items-center shadow m-4">
      <Chart
        className="absolute"
        width="300px"
        height="300px"
        chartType="PieChart"
        loader={<div className="loader">Loading...</div>}
        data={[['Pac Man', 'Percentage'], ['', monthlyProgress], ['', 100 - monthlyProgress]]}
        options={{
          legend: 'none',
          pieSliceText: monthlyProgress,
          pieHole: 0.85,
          pieStartAngle: 0,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: monthlyProgress > 50 ? '#69f018' : 'red' },
            1: { color: '#eaeef1' },
          },
        }}
      />
      <div className="absolute">
        <p>You Achieved</p>
        <p>
          {monthlyProgress}
          {' '}
          %
        </p>
        <p>this month</p>
      </div>
    </div>
    <Chart
      width="500px"
      height="300px"
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={[
        ['Weeks', 'value'],
        ['This week', thisWeek],
        ['Last Week', lastWeek],
        ['2 weeks ago', twoWeek],
        ['3 weeks ago', threeWeek],
      ]}
      options={{
        chart: {
          title: 'Weekly progress score',
          subtitle: 'Your progress on weekly breakdown',
        },
      }}
    />
  </div>
);

Progress.propTypes = {
  monthlyProgress: PropTypes.number.isRequired,
  thisWeek: PropTypes.number.isRequired,
  lastWeek: PropTypes.number.isRequired,
  twoWeek: PropTypes.number.isRequired,
  threeWeek: PropTypes.number.isRequired,
};

export default Progress;
