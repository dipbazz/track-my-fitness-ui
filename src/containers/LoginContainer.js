import { connect } from 'react-redux';
import Login from '../components/Login';
import { resetUser } from '../redux/actions';
import { loginUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.currentUser.isLoading,
  apiError: state.currentUser.error,
  isAuthenticated: state.currentUser.isAuthenticated,
});

const mapDispatchToProps = {
  login: (email, password) => loginUserAsync(email, password),
  resetUser: () => resetUser(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
