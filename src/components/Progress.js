import Chart from 'react-google-charts';

const Progress = () => {
  const progress = 20;
  return (
    <div>
      <Chart
        width="300px"
        height="300px"
        chartType="PieChart"
        loader={<div className="loader">Loading...</div>}
        data={[['Pac Man', 'Percentage'], ['', progress], ['', 100 - progress]]}
        options={{
          legend: 'none',
          pieSliceText: 'none',
          pieHole: 0.85,
          pieStartAngle: 0,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: progress > 50 ? '#69f018' : 'red' },
            1: { color: '#eaeef1' },
          },
        }}
      />
      <Chart
        width="500px"
        height="300px"
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Weeks', 'value'],
          ['This week', 1000],
          ['Last Week', 1170],
          ['2 weeks ago', 660],
          ['3 weeks ago', 1030],
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
};

export default Progress;
