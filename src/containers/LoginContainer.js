import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.user.status,
  error: state.user.error,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  login: (email, password) => loginUserAsync(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
