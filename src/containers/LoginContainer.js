import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  status: state.user.status,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginUserAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
