import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getExerciseAsync, getMeasurementAsync } from '../redux/actions/thunk';
import MeasurementDetail from '../components/MeasurementDetail';

const mapStateToProps = (state, ownProps) => {
  const { measurements } = state.measurement;
  const measurement = measurements.find((measurement) => (
    measurement.date === ownProps.match.params.date));
  return {
    measurement,
    exercises: state.exercise.exercises,
  };
};

const mapDispatchToProps = {
  getMeasurements: (id) => getMeasurementAsync(id),
  getExercises: (id) => getExerciseAsync(id),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeasurementDetail));
