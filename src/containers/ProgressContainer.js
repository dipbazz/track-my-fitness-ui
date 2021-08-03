import { connect } from 'react-redux';
import Progress from '../components/Progress';
import {
  calculateProgress,
  monthlyMeasurements, weeklyMeasurements,
} from '../utils/helper';

const mapStateToProps = (state) => {
  console.log(state);
  const { measurements } = state.measurement;
  const { exercises } = state.exercise;
  const monthlyProgress = calculateProgress(
    monthlyMeasurements(measurements),
    exercises,
  );
  const thisWeek = calculateProgress(
    weeklyMeasurements(measurements),
    exercises,
  );

  const lastWeek = calculateProgress(
    weeklyMeasurements(measurements, 1),
    exercises,
  );

  const twoWeek = calculateProgress(
    weeklyMeasurements(measurements, 2),
    exercises,
  );

  const threeWeek = calculateProgress(
    weeklyMeasurements(measurements, 3),
    exercises,
  );
  return {
    monthlyProgress,
    thisWeek,
    lastWeek,
    twoWeek,
    threeWeek,
  };
};

// const mapDispatchToProps = {
//   registerUser: (email, password) => registerUserAsync(email, password),
// };

export default connect(mapStateToProps)(Progress);
