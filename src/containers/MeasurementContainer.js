import { connect } from 'react-redux';
import Measurement from '../components/Measurement';
import { getExerciseAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.exercises.isLoading,
  apiError: state.exercises.error,
  exercises: state.exercises.data || [],
});

const mapDispatchToProps = {
  getExercise: (id) => getExerciseAsync(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);
