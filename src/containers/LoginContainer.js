import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginUserAsync: (email, password) => dispatch(loginUserAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
