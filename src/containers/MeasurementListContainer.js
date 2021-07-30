import { connect } from 'react-redux';
import MeasurementList from '../components/MeasurementList';

// const mapStateToProps = (state) => ({
//   status: state.exercise.status,
//   error: state.exercise.error,
//   exercises: state.exercise.exercises,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getExercise: (id) => dispatch(getExerciseAsync(id)),
// });

export default connect()(MeasurementList);
