import { connect } from 'react-redux';
import Register from '../components/Register';
import { resetUser } from '../redux/actions';
import { registerUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.currentUser.isLoading,
  apiError: state.currentUser.error,
  isAuthenticated: state.currentUser.isAuthenticated,
});

const mapDispatchToProps = {
  registerUser: (email, password) => registerUserAsync(email, password),
  resetUser: () => resetUser(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
