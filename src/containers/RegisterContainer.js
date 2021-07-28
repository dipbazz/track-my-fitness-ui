import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.user.status,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  register: (email, password) => dispatch(registerUserAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
