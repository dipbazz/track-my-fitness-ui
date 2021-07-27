import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapDispatchToProps = (dispatch) => ({
  loginUserAsync: (email, password) => dispatch(loginUserAsync(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
