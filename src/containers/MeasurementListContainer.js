import { connect } from 'react-redux';
import MeasurementList from '../components/MeasurementList';
import { getMeasurementAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.measurement.status,
  error: state.measurement.error,
  measurements: state.measurement.measurements,
});

const mapDispatchToProps = (dispatch) => ({
  getMeasurement: (id) => dispatch(getMeasurementAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementList);
