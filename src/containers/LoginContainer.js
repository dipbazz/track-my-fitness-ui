import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapDispatchToProps = (dispatch) => ({
  loginUserAsync: dispatch(loginUserAsync),
});

export default connect(null, mapDispatchToProps)(Login);
