import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */
const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    ))}
  />
);

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(ProtectedRoute);
