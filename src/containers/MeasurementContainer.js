import { connect } from 'react-redux';
import Measurement from '../components/Measurement';
import { getExerciseAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.exercise.status,
  error: state.exercise.error,
  exercises: state.exercise.exercises,
});

const mapDispatchToProps = {
  getExercise: (id) => getExerciseAsync(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);
