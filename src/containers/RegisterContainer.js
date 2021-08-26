import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.currentUser.isLoading,
  apiError: state.currentUser.error,
  isAuthenticated: state.currentUser.isAuthenticated,
});

const mapDispatchToProps = {
  registerUser: (email, password) => registerUserAsync(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
