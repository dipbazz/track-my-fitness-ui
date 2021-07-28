import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUserAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
