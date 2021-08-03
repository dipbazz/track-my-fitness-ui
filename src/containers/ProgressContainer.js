import { connect } from 'react-redux';
import Progress from '../components/Progress';

// const mapStateToProps = (state) => ({
//   status: state.user.status,
//   error: state.user.error,
//   isAuthenticated: state.user.isAuthenticated,
// });

// const mapDispatchToProps = {
//   registerUser: (email, password) => registerUserAsync(email, password),
// };

export default connect()(Progress);
