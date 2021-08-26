import { connect } from 'react-redux';
import MeasurementList from '../components/MeasurementList';
import { getExerciseAsync, getMeasurementAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.measurements.isLoading,
  apiError: state.measurements.error,
  measurements: state.measurements.data || [],
});

const mapDispatchToProps = {
  getMeasurements: (id) => getMeasurementAsync(id),
  getExercises: (id) => getExerciseAsync(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementList);
