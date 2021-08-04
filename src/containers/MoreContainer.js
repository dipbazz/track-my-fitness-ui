import { connect } from 'react-redux';
import More from '../components/More';
import { logoutUserAsync } from '../redux/actions/thunk';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  logout: () => logoutUserAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(More);
