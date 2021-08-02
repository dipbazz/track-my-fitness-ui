import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.user.status,
  error: state.user.error,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  registerUser: (email, password) => registerUserAsync(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
