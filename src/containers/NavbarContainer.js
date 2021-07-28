import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUserAsync } from '../redux/actions/thunk';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUserAsync()),
});

export default connect(null, mapDispatchToProps)(Navbar);
