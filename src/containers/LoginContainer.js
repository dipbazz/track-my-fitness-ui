import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  isLoading: state.currentUser.isLoading,
  apiError: state.currentUser.error,
  isAuthenticated: state.currentUser.isAuthenticated,
});

const mapDispatchToProps = {
  login: (email, password) => loginUserAsync(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
